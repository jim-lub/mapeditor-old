import React from 'react';

import { Button } from './Button';

// import { useAuth } from 'lib/authentication';
import { SIDEBAR_ROUTES } from 'config/constants/sidebar';

export default () => {
  // const auth = useAuth();

  return (
    <div className="sidebar__wrapper">
      {
        SIDEBAR_ROUTES
          .map((route, index) => {
            return <Button key={index} {...route} />
          })
      }
    </div>
  )
}
