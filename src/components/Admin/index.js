import React, { Fragment } from 'react';

import { useAuthentication, useAuthorization } from 'lib/auth';

import { AllUsers } from './AllUsers';

export default () => {
  const auth = useAuthentication();
  const canAccesAdminPanel = useAuthorization({
    rules: ['is_signed_in', 'is_admin'],
    route: 'AUTH_SIGN_IN'
  });

  if (auth.isLoading) return null;

  return (
    <Fragment>
      {/*** AUTH ***/}
        {canAccesAdminPanel.redirect()}

      {/* render component */}
        <h1>Admin</h1>
        <AllUsers />
    </Fragment>
  )
}
