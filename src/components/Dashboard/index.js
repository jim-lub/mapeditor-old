import React from 'react';

import { useFirebase } from 'lib/firebase';

import AuthorizationWrapper from 'components/AuthorizationWrapper';

import * as ROUTES from 'config/constants/routes';

import {
  useAuthentication,
} from 'lib/auth';

export default () => {
  const firebase = useFirebase(),
        auth = useAuthentication();

  const rules = ROUTES.DASHBOARD.authorization_rules,
        route = ROUTES.DASHBOARD.authorization_redirect;

  return (
    <AuthorizationWrapper rules={rules} route={route}>
      <h1>Dashboard</h1>
      <div className="panel__small">
        {
          (auth.user)
            ? `Hello ${auth.user.username}`
            : ""
        }
      <button type="button" onClick={firebase.doSignOut}>Sign Out</button>
      </div>
    </AuthorizationWrapper>
  )
}
