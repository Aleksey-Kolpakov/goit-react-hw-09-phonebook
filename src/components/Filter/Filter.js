import React from 'react';
import PropTypes from 'prop-types';
import styles from './Filter.module.css'
import { connect, useSelector, useDispatch } from 'react-redux';
import phonebookActions from '../../redux/phonebook/phonebook-actions'
import phonebookSelectors from '../../redux/phonebook/phonebook-selectors'
const Filter = () => {
    const filter = useSelector(phonebookSelectors.getFilter);
    const dispatch = useDispatch();
    const handleChange = e => dispatch(phonebookActions.changeFilter(e.target.value));
    return (
        <label>
            Find contacts by name
              <input
                className={styles.input}
                type="text"
                name="filter"
                value={filter}
                onChange={handleChange}
            />
        </label>
    );
};

export default Filter;
