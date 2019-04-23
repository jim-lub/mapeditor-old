import React from 'react';

import AuthorizationWrapper from 'components/AuthorizationWrapper';
import { SignUpForm } from './SignUpForm';

import * as ROUTES from 'config/constants/routes';

export default () => {
  const rules = ROUTES.AUTH_SIGN_UP.authorization_rules,
        route = ROUTES.AUTH_SIGN_UP.authorization_redirect;

  return (
    <AuthorizationWrapper rules={rules} route={route}>
      <h1>Sign Up</h1>
      <div className="panel__small">
        <SignUpForm />
      </div>
    </AuthorizationWrapper>
  )
}
