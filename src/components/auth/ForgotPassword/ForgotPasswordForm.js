import React from 'react';
import { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import { useFirebase } from 'lib/firebase';

const ForgotPasswordFormBase = ({history}) => {
  const [email, setEmail] = useState(''),
        [error, setError] = useState(null),
        firebase = useFirebase();

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
