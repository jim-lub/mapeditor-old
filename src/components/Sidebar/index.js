import React from 'react';

import { Button } from './Button';

export default () => {
  return (
    <div className="sidebar__wrapper">
      <Button route="/" name="Dashboard" icon="default/dashboard.png" />
      <Button route="/signup" name="Sign Up" icon="default/auth_sign_up.png" />
      <Button route="/signin" name="Sign In" icon="default/auth_sign_in.png" />
    </div>
  )
}
