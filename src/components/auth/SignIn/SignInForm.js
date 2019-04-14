import React from 'react';
import { useState, useContext } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import { FirebaseContext } from 'lib/firebase';
import * as ROUTES from 'config/constants/routes';

const SignInFormBase = ({history}) => {
  const [email, setEmail] = useState(''),
        [password, setPassword] = useState(''),
        [error, setError] = useState(null),
        firebase = useContext(FirebaseContext);

  const handleFormSubmit = (event) => {
    event.preventDefault();

    firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        setEmail('');
        setPassword('');
        setError(null);

        history.push(ROUTES.DASHBOARD.route)
      })
      .catch(e => setError(e));
  }

  const isInvalidFormData =
    password === '' ||
    email === '';

  return (
    <form onSubmit={handleFormSubmit}>
      <input
        name="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        type="text"
        placeholder="Email Address"
      /><br />
      <input
        name="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        type="password"
        placeholder="Password"
      /><br />
      <button style={{margin: "5px 0 0 25px"}} disabled={isInvalidFormData} type="submit">
        Sign In
      </button>

      {error && <p>{error.message}</p>}
    </form>
  )
}

export const SignInForm = compose(withRouter)(SignInFormBase);
