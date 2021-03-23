import axios from 'axios';
import actions from './auth-actions';
axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const user = {
  //   name: "Alex",
  email: 'andre@ukr.net',
  password: 'qwerty123',
};

const getRegister = user => dispatch => {
  dispatch(actions.registerRequest());
  axios
    .post(`/users/signup`, user)
    .then(({ data }) => {
      dispatch(actions.registerSuccess(data));
      token.set(data.token);
    })
    .catch(error => dispatch(actions.registerError(error)));
};

const getLogin = user => dispatch => {
  dispatch(actions.loginRequest());
  axios
    .post('/users/login', user)
    .then(({ data }) => {
      dispatch(actions.loginSuccess(data));
      token.set(data.token);
    })
    .catch(error => dispatch(actions.loginError(error)));
};
const getUserData = () => (dispatch, getState) => {
  const persistedToken = getState().auth.token;
  if (!persistedToken) { return; }
  token.set(persistedToken);
  dispatch(actions.getUserRequest());
  axios
    .get('/users/current')
    .then(({ data }) => dispatch(actions.getUserSuccess(data)))
    .catch(error => dispatch(actions.getUserError(error)));
};
const getLogout = () => dispatch => {
  dispatch(actions.logoutRequest());
  axios
    .post('/users/logout')
    .then(() => {
      token.unset();
      dispatch(actions.logoutSuccess());
    })
    .catch(error => dispatch(actions.logoutError(error)));
};

export default { getRegister, getLogin, getUserData, getLogout }