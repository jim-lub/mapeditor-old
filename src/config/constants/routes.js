import Dashboard from 'components/Dashboard';
import Admin from 'components/Admin'

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
  authorization_rules: ['is_signed_in'],
  authorization_redirect: 'AUTH_SIGN_IN'
}

// *** AUTH ***
export const AUTH_SIGN_UP = {
  route: '/signup',
  component: SignUp,
  exact: false,
  name: 'Sign Up',
  desc: '',
  icon: 'default/auth_sign_up.png',
  authorization_rules: ['is_not_signed_in'],
  authorization_redirect: 'DASHBOARD'
}

export const AUTH_SIGN_IN = {
  route: '/signin',
  component: SignIn,
  exact: false,
  name: 'Sign In',
  desc: '',
  icon: 'default/auth_sign_in.png',
  authorization_rules: ['is_not_signed_in'],
  authorization_redirect: 'DASHBOARD'
}

export const AUTH_FORGOT_PASSWORD = {
  route: '/forgotpassword',
  component: ForgotPassword,
  exact: false,
  name: 'Forgot Password',
  desc: '',
  icon: 'default/auth_forgot_password.png',
  authorization_rules: ['is_not_signed_in'],
  authorization_redirect: 'DASHBOARD'
}

export const AUTH_ACCOUNT_SETTINGS = {
  route: '/accountsettings',
  component: AccountSettings,
  exact: false,
  name: 'Account Settings',
  desc: '',
  icon: 'default/auth_account_settings.png',
  authorization_rules: ['is_signed_in'],
  authorization_redirect: 'AUTH_SIGN_IN'
}

// *** ADMIN ***
export const ADMIN = {
  route: '/admin',
  component: Admin,
  exact: true,
  name: 'Admin',
  desc: '',
  icon: 'default/admin.png',
  authorization_rules: ['is_signed_in', 'is_admin'],
  authorization_redirect: 'AUTH_SIGN_IN'
}
