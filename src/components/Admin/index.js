import React, { Fragment } from 'react';

import { useAuthentication, useAuthorization } from 'lib/authentication';

import { AllUsers } from './AllUsers';

export default () => {
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

      {/* render component */}
        <h1>Admin</h1>
        <AllUsers />
    </Fragment>
  )
}
