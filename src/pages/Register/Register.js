import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './Register.module.css';
import authOperations from '../../redux/auth/auth-operations';
import authSelectors from '../../redux/auth/auth-selectors';
import Loader from 'react-loader-spinner';


const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const error = useSelector(authSelectors.getAuthError);
  const loading = useSelector(authSelectors.getAuthLoading);
  const dispatch = useDispatch();
  const getRegisterUser = user => dispatch(authOperations.getRegister(user));
  
  const emailChange = ({ target }) => {
    const { value } = target;
    setEmail(value);
  }
  const passwordChange = ({ target }) => {
    const { value } = target;
    setPassword(value);
  }
  const nameChange = ({ target }) => {
    const { value } = target;
    setName(value);
  }
  const resetForm = () => {
    setEmail('');
    setPassword('');
    setName('');
  };
  const registerUser = event => {
    event.preventDefault();
    const user = {
      name,
      email,
      password,
    };
    getRegisterUser(user);
    resetForm();
  };
  return (
    <>
      {error && (
        <>
          <h1>Error</h1>
          <p>{error}</p>
        </>
      )}
      {loading && (
        <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />
      )}
      <form className={styles.form} onSubmit={registerUser}>
        <label>
          Name
        <input
            className={styles.input}
            type="text"
            placeholder="Enter your name"
            name="name"
            value={name}
            onChange={nameChange}
          />
        </label>
        <label>
          Email
        <input
            className={styles.input}
            type="text"
            placeholder="Enter your email"
            name="email"
            value={email}
            onChange={emailChange}
          />
        </label>
        <label>
          Password
        <input
            className={styles.input}
            type="text"
            placeholder="Enter password"
            name="password"
            value={password}
            onChange={passwordChange}
          />
        </label>
        <button className={styles.button} type="submit">
          Register
      </button>
      </form>
    </>
  );
};

export default Register;


Register.propTypes = {};
