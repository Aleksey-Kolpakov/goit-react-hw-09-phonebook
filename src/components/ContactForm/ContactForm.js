import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import phonebookActions from '../../redux/phonebook/phonebook-actions'
import phonebookOperations from '../../redux/phonebook/phonebook-operations'
import styles from "./ContactForm.module.css";
import phonebookSelectors from '../../redux/phonebook/phonebook-selectors';

const ContactForm = () => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const contacts = useSelector(phonebookSelectors.getContacts);
    const dispatch = useDispatch();
    const addContactToRedux = contact => dispatch(phonebookOperations.addContact(contact));

    const nameChange = ({ target }) => {
        const { value } = target;
        setName(value);
    }
    const numberChange = ({ target }) => {
        const { value } = target;
        setNumber(value);
    }
    const resetForm = () => {
        setName('');
        setNumber('');
    }
    const createContact = (event) => {
        event.preventDefault();
        const isNameExist = contacts.find(contact => contact.name === name);
        if (isNameExist) {
            alert(`${name} Already Exist`);
            return;
        }
        const contact = {
            name,
            number
        }
        addContactToRedux(contact);
        resetForm()
    }
    return (
        <form className={styles.form} onSubmit={createContact} >
            <label>
                Name
        <input
                    className={styles.input}
                    type="text"
                    placeholder="Enter Name"
                    name="name"
                    value={name}
                    onChange={nameChange}
                />
            </label>
            <label>
                Phone
        <input
                    className={styles.input}
                    type="text"
                    placeholder="Enter Phone"
                    name="number"
                    value={number}
                    onChange={numberChange}
                />
            </label>
            <button className={styles.button} type="submit">Add contact</button>
        </form>
    );
};

export default ContactForm;
