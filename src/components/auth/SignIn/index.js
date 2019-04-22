import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from 'config/constants/routes';

import {
  useAuthentication,
  useAuthorization,
} from 'lib/auth';

import { SignInForm } from './SignInForm';

export default () => {
  const auth = useAuthentication();
  const canAccessSignInForm = useAuthorization({
    rules: ['is_not_signed_in'],
    route: 'DASHBOARD'
  });

  if (auth.isLoading) return null;

  return (
    <Fragment>
      {/*** AUTH ***/}
        {canAccessSignInForm.redirect()}

      {/* render */}
        <h1>Sign In</h1>
        <div className="panel__small">
          <SignInForm />
          Don't have an account? <Link to={ROUTES.AUTH_SIGN_UP.route}>Sign Up</Link><br />
          <Link to={ROUTES.AUTH_FORGOT_PASSWORD.route}>Forgot Password?</Link>
        </div>
    </Fragment>
  )
}
