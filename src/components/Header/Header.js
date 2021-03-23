import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';
import UserMenu from '../UserMenu/UserMenu';
import styles from './Header.module.css'
import { useSelector } from 'react-redux'
import authSelectors from '../../redux/auth/auth-selectors'
import LoginBar from '../LoginBar/LoginBar';
import authActions from '../../redux/auth/auth-actions';
const Header = () => {
    const IsAuthorized = useSelector(authSelectors.getIsAuthorized);
    return (
        <header>
            <NavLink className={styles.NavLink} exact to={routes.home}>Home</NavLink>
            {IsAuthorized && <NavLink className={styles.NavLink} to={routes.contacts}>Contacts</NavLink>}

            {!IsAuthorized && <LoginBar />}
            {IsAuthorized && <UserMenu />}
        </header>
    );
};

export default Header;