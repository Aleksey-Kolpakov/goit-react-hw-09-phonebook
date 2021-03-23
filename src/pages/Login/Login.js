import React, {  useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './Login.module.css';
import authOperations from '../../redux/auth/auth-operations';
import authSelectors from '../../redux/auth/auth-selectors';
import Loader from 'react-loader-spinner';



const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const error = useSelector(authSelectors.getAuthError);
  const loading = useSelector(authSelectors.getAuthLoading);
  const dispatch = useDispatch();
  const getLoginUser = user => dispatch(authOperations.getLogin(user));


  const emailChange = ({ target }) => {
    const { value } = target;
    setEmail(value);
  }
  const passwordChange = ({ target }) => {
    const { value } = target;
    setPassword(value);
  }
  const resetForm = () => {
    setEmail('');
    setPassword('');
  };

  const loginUser = event => {
    event.preventDefault();
    const user = {
      email,
      password,
    };
    getLoginUser(user);
    resetForm();
  };
  return (
    <>
      {error && (
        <>
          <h1>Error</h1>
          <p>{error}</p>
        </>
      )}
      {loading && (
        <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />
      )}
      <form className={styles.form} onSubmit={loginUser}>
        <label>
          Email
          <input
            className={styles.input}
            type="text"
            placeholder="Enter your email"
            name="email"
            value={email}
            onChange={emailChange}
          />
        </label>
        <label>
          Password
          <input
            className={styles.input}
            type="text"
            placeholder="Enter password"
            name="password"
            value={password}
            onChange={passwordChange}
          />
        </label>
        <button className={styles.button} type="submit">
          Login
        </button>
      </form>
    </>
  );
};

export default Login;


