import React from 'react';

import { Button } from './Button';

import { SIDEBAR_ROUTES } from 'config/constants/sidebar';

export default () => {
  return (
    <div className="sidebar__wrapper">
     {
       SIDEBAR_ROUTES
        .map((route, index) => <Button {...route} />)
     }
    </div>
  )
}
