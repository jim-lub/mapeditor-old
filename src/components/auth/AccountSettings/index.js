import React, { Fragment } from 'react';

import {
  useAuthentication,
  useAuthorization,
} from 'lib/authentication';

import { ChangePasswordForm } from './ChangePasswordForm';

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

      {/* render */}
        <h1>Account Settings</h1>
        <div className="panel__small">
          <ChangePasswordForm />
        </div>
    </Fragment>
  )
}
