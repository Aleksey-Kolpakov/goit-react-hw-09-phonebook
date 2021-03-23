import { createSelector } from 'reselect';

const getContacts = state => state.phonebook.contacts;
const getFilter = state => state.phonebook.filter;
const getError = state => state.phonebook.error;
const getLoading = state => state.phonebook.loading;

const getVisibleContacts = createSelector([getContacts, getFilter],
    (contacts, filter) => contacts.filter(({ name }) => {
        const searchFilter = filter.toLowerCase();
        return name.toLowerCase().includes(searchFilter)
    }));
export default { getContacts, getVisibleContacts, getFilter, getError, getLoading }