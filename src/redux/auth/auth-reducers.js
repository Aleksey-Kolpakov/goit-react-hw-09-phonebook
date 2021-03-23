import { createReducer, combineReducers } from '@reduxjs/toolkit';
import authActions from './auth-actions';
const initialState = { name: null, email: null };
const {
  registerSuccess,
  registerRequest,
  registerError,
  loginSuccess,
  loginRequest,
  loginError,
  logoutSuccess,
  logoutRequest,
  logoutError,
  getUserSuccess,
  getUserRequest,
  getUserError,
} = authActions;

const user = createReducer(initialState, {
  [registerSuccess]: (state, { payload }) => payload.user,
  [loginSuccess]: (state, { payload }) => payload.user,
  [getUserSuccess]: (state, { payload }) => payload,
  [logoutSuccess]: () => initialState,
});

const isAuthorized = createReducer(false, {
  [registerSuccess]: () => true,
  [loginSuccess]: () => true,
  [getUserSuccess]: () => true,
  [logoutSuccess]: () => false,
  [registerError]: () => false,
  [loginError]: () => false,
  [getUserError]: () => false,
  [logoutError]: () => true,
});

const token = createReducer(null, {
  [registerSuccess]: (_, { payload }) => payload.token,
  [loginSuccess]: (_, { payload }) => payload.token,
  [logoutSuccess]: () => null,
});
const loading = createReducer(false, {
  [registerSuccess]: () => false,
  [registerRequest]: () => true,
  [registerError]: () => false,
  [loginSuccess]: () => false,
  [loginRequest]: () => true,
  [loginError]: () => false,
  [logoutSuccess]: () => false,
  [logoutRequest]: () => true,
  [logoutError]: () => false,
  [getUserSuccess]: () => false,
  [getUserRequest]: () => true,
  [getUserError]: () => false,
});

const error = createReducer(false, {
  [registerSuccess]: () => false,
  [registerRequest]: () => false,
  [registerError]: (_, { payload }) => payload.message,
  [loginSuccess]: () => false,
  [loginRequest]: () => false,
  [loginError]: (_, { payload }) => payload.message,
  [logoutSuccess]: () => false,
  [logoutRequest]: () => false,
  [logoutError]: (_, { payload }) => payload.message,
  [getUserSuccess]: () => false,
  [getUserRequest]: () => false,
  [getUserError]: (_, { payload }) => payload.message,
});
const authReducer = combineReducers({
  user,
  isAuthorized,
  token,
  loading,
  error,
});

export default authReducer;
