import React from 'react';
import { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import { useFirebase } from 'lib/firebase';

import * as ROUTES from 'config/constants/routes';

const SignInFacebookBase = ({history}) => {
  const [error, setError] = useState(null);
  const firebase = useFirebase();

  const handleFormSubmit = (event) => {
    event.preventDefault();

    firebase
      .doSignInWithFacebook()
      .then(socialAuthUser => {
        return firebase.user(socialAuthUser.user.uid)
          .set({
            username: socialAuthUser.additionalUserInfo.profile.name,
            email: socialAuthUser.additionalUserInfo.profile.email,
            avatar: socialAuthUser.additionalUserInfo.profile.picture.data.url,
            auth_ref: "facebook",
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
    <form onSubmit={handleFormSubmit} className="btn__flex">
      <button type="submit">
        <img src={require('../../../assets/icons/social/facebook.png')} alt="" width="32" height="32" />
      </button>

      {error && <p>{error.message}</p>}
    </form>
  )
}

export const SignInFacebook = compose(withRouter)(SignInFacebookBase);
