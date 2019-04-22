import React, { Fragment } from 'react';

import {
  useAuthentication,
  useAuthorization,
} from 'lib/authentication';

import { SignUpForm } from './SignUpForm';

export default () => {
  const auth = useAuthentication();
  const canAccessSignUpForm = useAuthorization({
    rules: ['is_not_signed_in'],
    route: 'DASHBOARD'
  });

  if (auth.isLoading) return null;

  return (
    <Fragment>
      {/*** AUTH ***/}
        {canAccessSignUpForm.redirect()}

      {/* render */}
        <h1>Sign Up</h1>
        <div className="panel__small">
          <SignUpForm />
        </div>
    </Fragment>
  )
}
