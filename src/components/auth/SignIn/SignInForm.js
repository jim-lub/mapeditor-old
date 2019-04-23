import React from 'react';
import { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import { useFirebase } from 'lib/firebase';

import * as ROUTES from 'config/constants/routes';

const SignInFormBase = ({history}) => {
  const [email, setEmail] = useState(''),
        [password, setPassword] = useState(''),
        [error, setError] = useState(null),
        firebase = useFirebase();

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
      {error && <p>{error.message}</p>}
      <label className="form__icon"><img src={require('../../../assets/icons/small/email.png')} alt="" width="32" height="32" /></label>
      <input
        name="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        type="text"
        placeholder="Email Address"
      /><br />
      <label className="form__icon"><img src={require('../../../assets/icons/small/password.png')} alt="" width="32" height="32" /></label>
      <input
        name="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        type="password"
        placeholder="Password"
      /><br />
      <button disabled={isInvalidFormData} type="submit" style={{width: '100%'}}>
        <h3>Sign In</h3>
      </button>
    </form>
  )
}

export const SignInForm = compose(withRouter)(SignInFormBase);
