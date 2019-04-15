import React from 'react';

import { Button } from './Button';

import { useAuthentication } from 'lib/authentication';
import { useAuthorization } from 'lib/authentication';

import PERMISSIONS from 'config/constants/permissions';

import { SIDEBAR_ROUTES } from 'config/constants/sidebar';

export default () => {
  const auth = useAuthentication();
  const authorization = useAuthorization();

  return (
    <div className="sidebar__wrapper">
      {
        SIDEBAR_ROUTES
          .map((route, index) => {
            return route.authorization.map((rule) => {
              if (authorization.condition(PERMISSIONS[rule](auth.user))) {
                return <Button key={index} {...route} />
              }

              return null;
            })
          })
      }
    </div>
  )
}
