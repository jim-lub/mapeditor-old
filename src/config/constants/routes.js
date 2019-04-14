import {
  Dashboard
} from 'components';

import {
  SignUp,
  SignIn
} from 'components/auth'

// *** DASHBOARD ***
export const DASHBOARD = {
  route: '/',
  component: Dashboard,
  exact: true,
  name: 'Dashboard',
  desc: '',
  icon: 'default/dashboard.png',
  authorization: ['member', 'premium', 'admin']
}

// *** AUTH ***
export const AUTH_SIGN_UP = {
  route: '/signup',
  component: SignUp,
  exact: false,
  name: 'Sign Up',
  desc: '',
  icon: 'default/auth_sign_up.png',
  authorization: ['guest']
}

export const AUTH_SIGN_IN = {
  route: '/signin',
  component: SignIn,
  exact: false,
  name: 'Sign In',
  desc: '',
  icon: 'default/auth_sign_in.png',
  authorization: ['guest']
}

export const AUTH_FORGOT_PASSWORD = {
  route: '/forgotpassword',
  component: 'ForgotPassword',
  exact: false,
  name: 'Forgot Password',
  desc: '',
  icon: 'default/auth_forgot_password.png',
  authorization: ['member', 'premium', 'admin']
}

export const AUTH_ACCOUNT_SETTINGS = {
  route: '/accountsettings',
  component: 'AccountSettings',
  exact: false,
  name: 'Account Settings',
  desc: '',
  icon: 'default/auth_account_settings.png',
  authorization: ['member', 'premium', 'admin']
}
