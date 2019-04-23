import React from 'react';
import { Link } from 'react-router-dom';

import AuthorizationWrapper from 'components/AuthorizationWrapper';
import { SignInForm } from './SignInForm';
import { SignInGoogle } from './SignInGoogle';
import { SignInFacebook } from './SignInFacebook';
import { SignInGithub } from './SignInGithub';

import * as ROUTES from 'config/constants/routes';

export default () => {
  const rules = ROUTES.AUTH_SIGN_IN.authorization_rules,
        route = ROUTES.AUTH_SIGN_IN.authorization_redirect;

  return (
    <AuthorizationWrapper rules={rules} route={route}>
      <div className="auth__signin-panel-wrapper">
        <div className="auth__signin-panel clearfix">
          <h1>Sign In</h1>
          <SignInForm />
          <div className="auth__signin-social-wrapper">
            <SignInGoogle />
            <SignInFacebook />
            <SignInGithub />
          </div>
          <div className="line"></div>
          Don't have an account? <Link to={ROUTES.AUTH_SIGN_UP.route}>Sign Up</Link><br />
          <Link to={ROUTES.AUTH_FORGOT_PASSWORD.route}>Forgot Password?</Link>
        </div>
      </div>
    </AuthorizationWrapper>
  )
}
