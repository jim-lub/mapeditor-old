import React, { Fragment } from 'react';

import { useFirebase } from 'lib/firebase';

import {
  useAuthentication,
  useAuthorization,
} from 'lib/authentication';

export default () => {
  const firebase = useFirebase();
  const auth = useAuthentication();
  const authorization = useAuthorization();

  if (auth.isLoading) return null;

  return (
    <Fragment>
      {/*** AUTH ***/}
        {authorization({
          rules: [(!auth.user)],
          route: 'AUTH_SIGN_IN'
        })}

      {/* render */}
        <div className="panel__small">
        <h1>Dashboard</h1>
        <h3>Hello, {(auth.user) ? auth.user.email : "guest"}</h3>
        <button type="button" onClick={firebase.doSignOut}>Sign Out</button>
        </div>
    </Fragment>
  )
}
