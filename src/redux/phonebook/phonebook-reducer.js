import { createReducer, combineReducers } from '@reduxjs/toolkit';
import phonebookActions from './phonebook-actions';
const {
  addContactError,
  addContactRequest,
  addContactSucces,
  deleteContactError,
  deleteContactRequest,
  deleteContactSucces,
  fetchContactsError,
  fetchContactsRequest,
  fetchContactsSucces,
  updateContactRequest,
  updateContactSucces,
  updateContactError,
} = phonebookActions;

const initialState = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  filter: '',
};
const contactReducer = createReducer([], {
  [addContactSucces]: (state, { payload }) => [payload, ...state],
  [deleteContactSucces]: (state, action) =>
    state.filter(contact => contact.id !== action.payload),
  [fetchContactsSucces]: (state, { payload }) => payload,
  [updateContactSucces]: (state, { payload }) =>
    state.map(contact => (contact.id === payload.id ? payload : contact)),
});

const requesReducer = createReducer(false, {
  [updateContactRequest]: () => true,
  [updateContactSucces]: () => false,
  [updateContactError]: () => false,
  [addContactRequest]: () => true,
  [addContactSucces]: () => false,
  [addContactError]: () => false,
  [deleteContactError]: () => false,
  [deleteContactSucces]: () => false,
  [deleteContactRequest]: () => true,
  [fetchContactsError]: () => false,
  [fetchContactsRequest]: () => true,
  [fetchContactsSucces]: () => false,
});
const errorReducer = createReducer(false, {
  [addContactRequest]: () => false,
  [addContactSucces]: () => false,
  [addContactError]: (state, { payload }) => payload,
  [deleteContactError]: (state, { payload }) => payload,
  [deleteContactSucces]: () => false,
  [deleteContactRequest]: () => false,
  [fetchContactsError]: (state, { payload }) => payload,
  [fetchContactsRequest]: () => false,
  [fetchContactsSucces]: () => false,
  [updateContactError]: (state, { payload }) => payload,
  [updateContactRequest]: () => false,
  [updateContactSucces]: () => false,
});

// export const contactReducer = (state = initialState.contacts, { type, payload }) => {
//     switch (type) {
//         case actionTypes.ADD:
//             return [payload, ...state];
//         case actionTypes.DELETE:
//             return state.filter(contact => contact.id !== payload)
//         default:
//             return state;
//     }
// }
const filterReducer = createReducer(initialState.filter, {
  [phonebookActions.changeFilter]: (state, { payload }) => payload,
});
// export const filterReducer = (state = "", { type, payload }) => {
//     switch (type) {
//         case actionTypes.CHANGE_FILTER:
//             return payload;
//         default:
//             return state;
//     }
// }
const phonebookReducer = combineReducers({
  contacts: contactReducer,
  filter: filterReducer,
  error: errorReducer,
  loading: requesReducer,
});

export default phonebookReducer;
