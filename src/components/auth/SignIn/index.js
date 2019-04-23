import React from 'react';
import { Link } from 'react-router-dom';

import AuthorizationWrapper from 'components/AuthorizationWrapper';
import { SignInForm } from './SignInForm';

import * as ROUTES from 'config/constants/routes';

export default () => {
  const rules = ROUTES.AUTH_SIGN_IN.authorization_rules,
        route = ROUTES.AUTH_SIGN_IN.authorization_redirect;

  return (
    <AuthorizationWrapper rules={rules} route={route}>
      <h1>Sign In</h1>
      <div className="panel__small">
        <SignInForm />
        Don't have an account? <Link to={ROUTES.AUTH_SIGN_UP.route}>Sign Up</Link><br />
        <Link to={ROUTES.AUTH_FORGOT_PASSWORD.route}>Forgot Password?</Link>
      </div>
    </AuthorizationWrapper>
  )
}
