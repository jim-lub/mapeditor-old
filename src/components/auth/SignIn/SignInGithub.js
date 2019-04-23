import React from 'react';
import { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import { useFirebase } from 'lib/firebase';

import * as ROUTES from 'config/constants/routes';

const SignInGithubBase = ({history}) => {
  const [error, setError] = useState(null);
  const firebase = useFirebase();

  const handleFormSubmit = (event) => {
    event.preventDefault();

    firebase
      .doSignInWithGithub()
      .then(socialAuthUser => {
        return firebase.user(socialAuthUser.user.uid)
          .set({
            username: socialAuthUser.user.providerData[0].displayName,
            email: socialAuthUser.user.providerData[0].email,
            avatar: socialAuthUser.user.providerData[0].photoURL,
            auth_ref: "github",
            roles: {}
          },
          { merge: true }
        );
      })
      .then(() => {
        setError(null);

        history.push(ROUTES.DASHBOARD.route)
      })
      .catch(e => setError(e));
  }

  return (
    <form onSubmit={handleFormSubmit} className="btn__flex" style={{marginLeft: 5}}>
      <button type="submit">
        <img src={require('../../../assets/icons/social/github.png')} alt="" width="32" height="32" />
      </button>

      {error && <p>{error.message}</p>}
    </form>
  )
}

export const SignInGithub = compose(withRouter)(SignInGithubBase);
