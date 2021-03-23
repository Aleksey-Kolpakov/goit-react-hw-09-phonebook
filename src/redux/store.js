// import { createStore, combineReducers } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension'
import logger from 'redux-logger';
import phonebookReducer, { contactReducer, filterReducer, errorReducer, requesReducer } from './phonebook/phonebook-reducer'
import authReducer from './auth/auth-reducers'
import { configureStore, getDefaultMiddleware, combineReducers } from '@reduxjs/toolkit'
import {
    persistStore, persistReducer, FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
const defaultmiddleware = getDefaultMiddleware({
    serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
});

const middleware = [...defaultmiddleware]

const authPersistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token'],
}
const authPersistedReducer = persistReducer(authPersistConfig, authReducer);
// const store = createStore(rootReducer, composeWithDevTools());
const rootReducer = combineReducers({
    auth: authPersistedReducer,
    phonebook: phonebookReducer

})
const store = configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV === 'development', /// devtools only in developmetn
    middleware,
})
const persistor = persistStore(store)
export default { store, persistor };
