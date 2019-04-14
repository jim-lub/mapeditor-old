import React from 'react';
import { Link } from 'react-router-dom';

import { SignInForm } from './SignInForm';
import * as ROUTES from 'config/constants/routes';

export default () => {
  return (
    <div>
      <h1>Sign In</h1>
      <div className="panel__small">
        <SignInForm />
        Don't have an account? <Link to={ROUTES.AUTH_SIGN_UP.route}>Sign Up</Link>
      </div>
    </div>
  )
}
