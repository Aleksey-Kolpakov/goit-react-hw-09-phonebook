const getIsAuthorized = state => state.auth.isAuthorized;
const getUser = state => state.auth.user;
const getToken = state => state.auth.token;
const getAuthError = state => state.auth.error;
const getAuthLoading=state=>state.auth.loading

export default {getIsAuthorized,getUser,getToken,getAuthError,getAuthLoading}