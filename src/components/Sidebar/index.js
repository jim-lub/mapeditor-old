import React from 'react';

import { Button } from './Button';

import { useAuthentication } from 'lib/authentication';
import { useAuthorization } from 'lib/authentication';

import PERMISSIONS from 'config/constants/permissions';

import { SIDEBAR_ROUTES } from 'config/constants/sidebar';

export default () => {
  const auth = useAuthentication();
  const authorization = useAuthorization();

  if (auth.isLoading) return null;

  return (
    <div className="sidebar__wrapper">
      {
        SIDEBAR_ROUTES
          .map((route, index) => {
              if (route.rules[0] === 'is_signed_in' && authorization({rules: [(auth.user)]})) {
                return <Button key={index} {...route} />
              }

              if (route.rules[0] === 'is_not_signed_in' && authorization({rules: [(!auth.user)]})) {
                return <Button key={index} {...route} />
              }
              return null;
          })
      }
    </div>
  )
}
