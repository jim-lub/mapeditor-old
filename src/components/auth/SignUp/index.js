import React, { Fragment } from 'react';

import {
  useAuthentication,
  useAuthorization,
} from 'lib/authentication';

import { SignUpForm } from './SignUpForm';

export default () => {
  const auth = useAuthentication();
  const authorization = useAuthorization();

  if (auth.isLoading) return null;

  return (
    <Fragment>
      {/*** AUTH ***/}
        {authorization({
          rules: [(auth.user)],
          route: 'DASHBOARD'
        })}

      {/* render */}
        <h1>Sign Up</h1>
        <div className="panel__small">
          <SignUpForm />
        </div>
    </Fragment>
  )
}
