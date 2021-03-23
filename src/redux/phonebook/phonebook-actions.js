import { createAction } from '@reduxjs/toolkit';

const addContactSucces = createAction('phoneBook/addContactSucces');
const addContactError = createAction('phoneBook/addContactError');
const addContactRequest = createAction('phoneBook/addContactRequest');

//const addContact = createAction('phonebook/addContact');
// const addContact = contact => ({
//     type: actionTypes.ADD,
//     payload: contact
// })
// const deleteContact = createAction('phonebook/deleteContact');
const deleteContactSucces = createAction('phoneBook/deleteContactSucces');
const deleteContactError = createAction('phoneBook/deleteContactError');
const deleteContactRequest = createAction('phoneBook/deleteContactRequest');

// const deleteContact = id => ({
//     type: actionTypes.DELETE,
//     payload: id
// })
const fetchContactsRequest = createAction('phoneBook/fetchContactsRequest');
const fetchContactsSucces = createAction('phoneBook/fetchContactsSucces');
const fetchContactsError = createAction('phoneBook/fetchContactsError');

const updateContactRequest = createAction('phoneBook/updateContactRequest');
const updateContactSucces = createAction('phoneBook/updateContactSucces');
const updateContactError = createAction('phoneBook/updateContactError');

const changeFilter = createAction('phoneBook/change-filter');
// const changeFilter = value => ({
//     type: actionTypes.CHANGE_FILTER,
//     payload: value
// })

export default {
  changeFilter,
  addContactSucces,
  addContactError,
  addContactRequest,
  deleteContactSucces,
  deleteContactError,
  deleteContactRequest,
  fetchContactsRequest,
  fetchContactsSucces,
  fetchContactsError,
  updateContactRequest,
  updateContactSucces,
  updateContactError,
};
