import React, { Suspense, lazy, useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import Loader from 'react-loader-spinner';
import Header from './components/Header/Header';
import authOperations from './redux/auth/auth-operations'
import routes from './routes';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute'
const Login = lazy(() => import('./pages/Login/Login' /* webpackChunkName: "login-page" */));
const Contacts = lazy(() => import('./pages/Contacts/Contacts' /* webpackChunkName: "contacts-page" */));
const Register = lazy(() => import('./pages/Register/Register' /* webpackChunkName: "register-page" */));
const HomePage = lazy(() => import('./pages/HomePage/HomePage' /* webpackChunkName: "home-page" */));

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authOperations.getUserData())
  }, [])
  return (
    <>
      <Header />
      <Suspense
        fallback={
          <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />
        }
      >
        <Switch>
          <PublicRoute exact path={routes.home} redirectTo={routes.contacts} component={HomePage} />
          <PublicRoute path={routes.login} restricted redirectTo={routes.contacts} component={Login} />
          <PublicRoute path={routes.register} restricted redirectTo={routes.contacts} component={Register} />
          <PrivateRoute path={routes.contacts} redirectTo={routes.login} component={Contacts} />
        </Switch>
      </Suspense>
    </>
  );
};

export default App;
