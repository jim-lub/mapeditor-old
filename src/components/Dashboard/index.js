import React, { Fragment } from 'react';

import { useFirebase } from 'lib/firebase';

import {
  useAuthentication,
  useAuthorization,
} from 'lib/authentication';

export default () => {
  const firebase = useFirebase();
  const auth = useAuthentication();
  const canAccessDashboard = useAuthorization({
    rules: ['is_signed_in'],
    route: 'AUTH_SIGN_IN'
  });

  if (auth.isLoading) return null;

  return (
    <Fragment>
      {/*** AUTH ***/}
        {canAccessDashboard.redirect()}

      {/* render */}
        <div className="panel__small">
        <h1>Dashboard</h1>
        <h3>Hello, {(auth.user) ? auth.user.email : "guest"}</h3>
        <button type="button" onClick={firebase.doSignOut}>Sign Out</button>
        </div>
    </Fragment>
  )
}
