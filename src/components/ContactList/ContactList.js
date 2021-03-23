import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import PropTypes from 'prop-types';
import styles from './ContactList.module.css'
import phonebookActions from '../../redux/phonebook/phonebook-actions'
import phonebookOperations from '../../redux/phonebook/phonebook-operations'
import phonebookSelectors from '../../redux/phonebook/phonebook-selectors'
const ContactList = () => {
    const visibleContacts = useSelector(phonebookSelectors.getVisibleContacts);
    const dispatch = useDispatch()
    const deleteContact = id => dispatch(phonebookOperations.deleteContact(id));
    const fetchContacts = () => dispatch(phonebookOperations.fetchContacts());
    useEffect(() => {
        fetchContacts();
    }, [])
    return (
        <ul className={styles.list}>
            {visibleContacts.map(contact => (
                <li key={contact.id} className={styles.item}>{contact.name}:{contact.number}
                    <button className={styles.button} type="button" onClick={() => deleteContact(contact.id)}>Delete contact</button>
                </li>
            ))}
        </ul>
    );
};

export default ContactList;

ContactList.propTypes = {

}