import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import authOperations from '../../redux/auth/auth-operations'
import authSelectors from '../../redux/auth/auth-selectors'
import styles from './UserMenu.module.css'
const UserMenu = () => {
    const user = useSelector(authSelectors.getUser);
    const dispatch = useDispatch();
    const logoutUser = () => dispatch(authOperations.getLogout())
    return (
        <div className={styles.userMenu}>
            <p>{user.email}</p>
            <button className={styles.button} onClick={logoutUser}>Выйти</button>

        </div>
    );
};


export default UserMenu;