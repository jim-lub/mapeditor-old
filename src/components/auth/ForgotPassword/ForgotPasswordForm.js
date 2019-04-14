import React from 'react';
import { useState, useContext } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import { FirebaseContext } from 'lib/firebase';
// import * as ROUTES from 'config/constants/routes';

const ForgotPasswordFormBase = ({history}) => {
  const [email, setEmail] = useState(''),
        [error, setError] = useState(null),
        firebase = useContext(FirebaseContext);

  const handleFormSubmit = (event) => {
    event.preventDefault();

    firebase
      .doPasswordReset(email)
      .then(() => {
        setEmail('');
      })
      .catch(e => setError(e));
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <input
        name="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        type="text"
        placeholder="Email Address"
      /><br />
      <button type="submit">
        Reset My Password
      </button>

      {error && <p>{error.message}</p>}
    </form>
  )
}

export const ForgotPasswordForm = compose(withRouter)(ForgotPasswordFormBase);
