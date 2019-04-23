import React from 'react';

import AuthorizationWrapper from 'components/AuthorizationWrapper';
import { ChangePasswordForm } from './ChangePasswordForm';

import * as ROUTES from 'config/constants/routes';

export default () => {
  const rules = ROUTES.AUTH_ACCOUNT_SETTINGS.authorization_rules,
        route = ROUTES.AUTH_ACCOUNT_SETTINGS.authorization_redirect;

  return (
    <AuthorizationWrapper rules={rules} route={route}>
      <h1>Account Settings</h1>
      <div className="panel__small">
        <ChangePasswordForm />
      </div>
    </AuthorizationWrapper>
  )
}
