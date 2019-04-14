import Dashboard from 'components/Dashboard';

import {
  SignUp,
  SignIn,
  ForgotPassword,
  AccountSettings
} from 'components/auth'

// *** DASHBOARD ***
export const DASHBOARD = {
  route: '/',
  component: Dashboard,
  exact: true,
  name: 'Dashboard',
  desc: '',
  icon: 'default/dashboard.png',
  authorization: ['MEMBER', 'ADMIN']
}

// *** AUTH ***
export const AUTH_SIGN_UP = {
  route: '/signup',
  component: SignUp,
  exact: false,
  name: 'Sign Up',
  desc: '',
  icon: 'default/auth_sign_up.png',
  authorization: ['GUEST']
}

export const AUTH_SIGN_IN = {
  route: '/signin',
  component: SignIn,
  exact: false,
  name: 'Sign In',
  desc: '',
  icon: 'default/auth_sign_in.png',
  authorization: ['GUEST']
}

export const AUTH_FORGOT_PASSWORD = {
  route: '/forgotpassword',
  component: ForgotPassword,
  exact: false,
  name: 'Forgot Password',
  desc: '',
  icon: 'default/auth_forgot_password.png',
  authorization: ['MEMBER', 'ADMIN']
}

export const AUTH_ACCOUNT_SETTINGS = {
  route: '/accountsettings',
  component: AccountSettings,
  exact: false,
  name: 'Account Settings',
  desc: '',
  icon: 'default/auth_account_settings.png',
  authorization: ['MEMBER', 'ADMIN']
}
