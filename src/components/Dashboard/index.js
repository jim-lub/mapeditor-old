import React from 'react';

import { useFirebase } from 'lib/firebase';

import {
  useAuthentication,
  useAuthorization,
  useRedirect
} from 'lib/authentication';

import * as ROUTES from 'config/constants/routes';
import PERMISSIONS from 'config/constants/permissions';

export default () => {
  const firebase = useFirebase();
  const auth = useAuthentication();
  const authorization = useAuthorization();
  const redirect = useRedirect();

  if (auth.isLoading) {
    return (
      <div className="panel__small">
      <h1>Loading user data..</h1>
      </div>
    )
  }

  if (auth.user) {
    return (
      <div className="panel__small">
      <h1>Dashboard</h1>
      <h3>Hello, {(auth.user) ? auth.user.email : "guest"}</h3>
      <button type="button" onClick={firebase.doSignOut}>Sign Out</button>
      </div>
    )
  }

  return (
    <div className="panel__small">
      {
        (authorization
          .condition(
            PERMISSIONS.isMember(auth.user)
          ))
            ? ""
            : redirect.to(ROUTES.AUTH_SIGN_IN.route)
      }
      <h1>Dashboard</h1>
      <h3>Hello, Guest</h3>
    </div>
  )
}
