import React, { Fragment } from 'react';

import { useFirebase } from 'lib/firebase';

import {
  useAuthentication,
  useAuthorization,
} from 'lib/auth';

export default () => {
  const firebase = useFirebase();
  const auth = useAuthentication();
  const canAccessDashboard = useAuthorization({
    rules: ['is_signed_in'],
    route: 'AUTH_SIGN_IN'
  });

  if (auth.isLoading) return null;

  if (canAccessDashboard.hasAccess()) {
    return (
      <Fragment>
        {/* render */}
          <div className="panel__small">
          <h1>Dashboard</h1>
          <h3>Hello, {(auth.user) ? auth.user.username : ""}</h3>
          <h5>{(auth.user) ? auth.user.uid : ""}</h5>
          <h5>{(auth.user) ? auth.user.email : ""}</h5>
          <h5>{(auth.user) ? [...Object.values(auth.user.roles)] : ""}</h5>
          <button type="button" onClick={firebase.doSignOut}>Sign Out</button>
          </div>
      </Fragment>
    )
  } else {
    return (
      <Fragment>
        {/*** AUTH ***/}
          {canAccessDashboard.redirect()}
      </Fragment>
    )
  }
}
