import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';
import styles from './LoginBar.module.css'
const LoginBar = () => {
    return (
        <div>
            <NavLink className={styles.NavLink} to={routes.login}>Login</NavLink>
            <NavLink className={styles.NavLink} to={routes.register}>Registration</NavLink>
        </div>
    );
};

export default LoginBar;