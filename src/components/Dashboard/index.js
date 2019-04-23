import React, { Fragment } from 'react';

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
    <Fragment>
    <button type="button" onClick={firebase.doSignOut}>Sign Out</button>
    <AuthorizationWrapper rules={rules} route={route}>
      <h1>Dashboard</h1>
      <div className="panel__small">
        <div>
          {
            (auth.user)
              ? <img src={auth.user.avatar} alt="" width="128" height="128"/>
              : ""
          }
        </div>
        <div>
          {
            (auth.user)
              ? `Hello ${auth.user.username}`
              : ""
          }
        </div>
      <button type="button" onClick={firebase.doSignOut}>Sign Out</button>
      </div>
    </AuthorizationWrapper>
    </Fragment>
  )
}
