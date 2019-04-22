import React, { Fragment } from 'react';

import {
  useAuthentication,
  useAuthorization,
} from 'lib/authentication';

import { ChangePasswordForm } from './ChangePasswordForm';

export default () => {
  const auth = useAuthentication();
  const canAccesAccountSettings = useAuthorization({
    rules: ['is_signed_in'],
    route: 'AUTH_SIGN_IN'
  });

  if (auth.isLoading) return null;

  return (
    <Fragment>
      {/*** AUTH ***/}
        {canAccesAccountSettings.redirect()}

      {/* render */}
        <h1>Account Settings</h1>
        <div className="panel__small">
          <ChangePasswordForm />
        </div>
    </Fragment>
  )
}
