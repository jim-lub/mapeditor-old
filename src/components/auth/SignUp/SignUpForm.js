import React from 'react';
import { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import { useFirebase } from 'lib/firebase';

import * as ROUTES from 'config/constants/routes';
import * as ROLES from 'config/constants/roles';

const SignUpFormBase = ({history}) => {
  const [username, setUsername] = useState(''),
        [email, setEmail] = useState(''),
        [passwordOne, setPasswordOne] = useState(''),
        [passwordTwo, setPasswordTwo] = useState(''),
        [isAdmin, setIsAdmin] = useState(false),
        [error, setError] = useState(null),
        firebase = useFirebase();

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const roles = {};

    if (isAdmin) {
      roles[ROLES.ADMIN] = ROLES.ADMIN
    }

    firebase.doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        return firebase.user(authUser.user.uid)
          .set({
            username,
            email,
            auth_ref: "local",
            roles
          },
          { merge: true }
        );
      })
      .then(() => {
        setUsername('');
        setEmail('');
        setPasswordOne('');
        setPasswordTwo('');
        setIsAdmin(false);
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
      <input
        name="isAdmin"
        type="checkbox"
        checked={isAdmin}
        onChange={(event) => setIsAdmin(event.target.checked)}
      /><br />
      <button disabled={isInvalidFormData} type="submit">Sign Up</button>

      {error && <p>{error.message}</p>}
    </form>
  )
}

export const SignUpForm = compose(withRouter)(SignUpFormBase);
