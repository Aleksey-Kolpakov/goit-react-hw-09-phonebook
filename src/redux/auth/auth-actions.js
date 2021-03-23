import { createAction } from '@reduxjs/toolkit';

const registerSuccess = createAction('auth/registerSuccess');
const registerRequest = createAction('auth/registerRequest');
const registerError = createAction('auth/registerError');

const loginSuccess = createAction('auth/loginSuccess');
const loginRequest = createAction('auth/loginRequest');
const loginError = createAction('auth/loginError');

const logoutSuccess = createAction('auth/logoutSuccess');
const logoutRequest = createAction('auth/logoutRequest');
const logoutError = createAction('auth/logoutError');

const getUserSuccess = createAction('auth/getUserSuccess');
const getUserRequest = createAction('auth/getUserRequest');
const getUserError = createAction('auth/getUserError');

export default {
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
}

