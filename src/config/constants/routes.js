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
  authorization: ['isMember', 'isAdmin']
}

// *** AUTH ***
export const AUTH_SIGN_UP = {
  route: '/signup',
  component: SignUp,
  exact: false,
  name: 'Sign Up',
  desc: '',
  icon: 'default/auth_sign_up.png',
  authorization: ['isGuest']
}

export const AUTH_SIGN_IN = {
  route: '/signin',
  component: SignIn,
  exact: false,
  name: 'Sign In',
  desc: '',
  icon: 'default/auth_sign_in.png',
  authorization: ['isGuest']
}

export const AUTH_FORGOT_PASSWORD = {
  route: '/forgotpassword',
  component: ForgotPassword,
  exact: false,
  name: 'Forgot Password',
  desc: '',
  icon: 'default/auth_forgot_password.png',
  authorization: ['isGuest']
}

export const AUTH_ACCOUNT_SETTINGS = {
  route: '/accountsettings',
  component: AccountSettings,
  exact: false,
  name: 'Account Settings',
  desc: '',
  icon: 'default/auth_account_settings.png',
  authorization: ['isMember', 'isAdmin']
}

// *** ADMIN ***
export const ADMIN = {
  route: '/admin',
  component: Admin,
  exact: true,
  name: 'Admin',
  desc: '',
  icon: 'default/admin.png',
  authorization: ['isMember', 'isAdmin']
}
