import React from 'react';

import AuthorizationWrapper from 'components/AuthorizationWrapper';
import { ForgotPasswordForm } from './ForgotPasswordForm';

import * as ROUTES from 'config/constants/routes';

export default () => {
  const rules = ROUTES.AUTH_FORGOT_PASSWORD.authorization_rules,
        route = ROUTES.AUTH_FORGOT_PASSWORD.authorization_redirect;

  return (
    <AuthorizationWrapper rules={rules} route={route}>
      <h1>Forgot Password</h1>
      <div className="panel__small">
        <ForgotPasswordForm />
      </div>
    </AuthorizationWrapper>
  )
}
