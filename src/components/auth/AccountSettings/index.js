import React from 'react';

import { ChangePasswordForm } from './ChangePasswordForm';

export default () => {
  return (
    <div>
      <h1>Account Settings</h1>
      <div className="panel__small">
        <ChangePasswordForm />
      </div>
    </div>
  )
}
