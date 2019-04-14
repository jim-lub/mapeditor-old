import React from 'react';
import { useState, useContext } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import { FirebaseContext } from 'lib/firebase';
// import * as ROUTES from 'config/constants/routes';

const ChangePasswordFormBase = ({history}) => {
  const [passwordOne, setPasswordOne] = useState(''),
        [passwordTwo, setPasswordTwo] = useState(''),
        [error, setError] = useState(null),
        firebase = useContext(FirebaseContext);

  const handleFormSubmit = (event) => {
    event.preventDefault();

    firebase
      .doPasswordUpdate(passwordOne)
      .then(() => {
        setPasswordOne('');
        setPasswordTwo('');
      })
      .catch(e => setError(e));
  }

  const isInvalidFormData =
      passwordOne !== passwordTwo ||
      passwordOne === '';

  return (
    <form onSubmit={handleFormSubmit}>
      <input
        name="email"
        value={passwordOne}
        onChange={(event) => setPasswordOne(event.target.value)}
        type="password"
        placeholder="New Password"
      /><br />
      <input
        name="email"
        value={passwordTwo}
        onChange={(event) => setPasswordTwo(event.target.value)}
        type="password"
        placeholder="Confirm New Password"
      /><br />
      <button disabled={isInvalidFormData} type="submit">
        Change My Password
      </button>

      {error && <p>{error.message}</p>}
    </form>
  )
}

export const ChangePasswordForm = compose(withRouter)(ChangePasswordFormBase);
