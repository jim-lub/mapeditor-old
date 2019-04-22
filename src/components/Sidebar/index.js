import React from 'react';

import { Button } from './Button';

import { useAuthentication } from 'lib/auth';
import { useAuthorization } from 'lib/auth';

import { SIDEBAR_ROUTES } from 'config/constants/sidebar';

export default () => {
  const auth = useAuthentication();
  const isSignedIn = useAuthorization({
    rules: ['is_signed_in']
  });

  const isNotSignedIn = useAuthorization({
    rules: ['is_not_signed_in']
  });

  const isAdmin = useAuthorization({
    rules: ['is_signed_in', 'is_admin']
  });

  if (auth.isLoading) return null;

  return (
    <div className="sidebar__wrapper">
      {
        SIDEBAR_ROUTES
          .map((route, index) => {
              if (route.rules[0] === 'is_signed_in' && isSignedIn.hasAccess()) {
                return <Button key={index} {...route} />
              }

              if (route.rules[0] === 'is_not_signed_in' && isNotSignedIn.hasAccess()) {
                return <Button key={index} {...route} />
              }
              return null;
          })
      }
    </div>
  )
}
