import React from 'react';

import { ForgotPasswordForm } from './ForgotPasswordForm';
// import * as ROUTES from 'config/constants/routes';

export default () => {
  return (
    <div>
      <h1>Forgot Password</h1>
      <div className="panel__small">
        <ForgotPasswordForm />
      </div>
    </div>
  )
}
