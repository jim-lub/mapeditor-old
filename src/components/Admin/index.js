import React from 'react';

import AuthorizationWrapper from 'components/AuthorizationWrapper';
import { AllUsers } from './AllUsers';

import * as ROUTES from 'config/constants/routes';

export default () => {
  const rules = ROUTES.ADMIN.authorization_rules,
        route = ROUTES.ADMIN.authorization_redirect;

  return (
    <AuthorizationWrapper rules={rules} route={route}>
      <h1>Admin</h1>
      <AllUsers />
    </AuthorizationWrapper>
  )
}
