import React from 'react';
import { useState, useContext } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import { FirebaseContext } from 'lib/firebase';
import * as ROUTES from 'config/constants/routes';

const SignUpFormBase = ({history}) => {
  const [username, setUsername] = useState(''),
        [email, setEmail] = useState(''),
        [passwordOne, setPasswordOne] = useState(''),
        [passwordTwo, setPasswordTwo] = useState(''),
        [error, setError] = useState(null),
        firebase = useContext(FirebaseContext);

  const handleFormSubmit = (event) => {
    event.preventDefault();

    firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        setUsername('');
        setEmail('');
        setPasswordOne('');
        setPasswordTwo('');
        setError(null);

        history.push(ROUTES.DASHBOARD.route);
      })
      .catch(e => setError(e));
  }

  const isInvalidFormData =
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      email === '' ||
      username === '';

  return (
    <form onSubmit={handleFormSubmit}>
      <input
        name="username"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
        type="text"
        placeholder="Full Name"
      /><br />
      <input
        name="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        type="text"
        placeholder="Email Address"
      /><br />
      <input
        name="passwordOne"
        value={passwordOne}
        onChange={(event) => setPasswordOne(event.target.value)}
        type="password"
        placeholder="Password"
      /><br />
      <input
        name="passwordTwo"
        value={passwordTwo}
        onChange={(event) => setPasswordTwo(event.target.value)}
        type="password"
        placeholder="Confirm Password"
      /><br />
      <button style={{margin: "5px 0 0 25px"}} disabled={isInvalidFormData} type="submit">Sign Up</button>

      {error && <p>{error.message}</p>}
    </form>
  )
}

export const SignUpForm = compose(withRouter)(SignUpFormBase);
