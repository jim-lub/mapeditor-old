import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from 'config/constants/routes';

import {
  useAuthentication,
  useAuthorization,
} from 'lib/authentication';

import { SignInForm } from './SignInForm';

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
        <h1>Sign In</h1>
        <div className="panel__small">
          <SignInForm />
          Don't have an account? <Link to={ROUTES.AUTH_SIGN_UP.route}>Sign Up</Link><br />
          <Link to={ROUTES.AUTH_FORGOT_PASSWORD.route}>Forgot Password?</Link>
        </div>
    </Fragment>
  )
}
