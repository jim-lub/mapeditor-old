export const RULES = {
  'is_signed_in': ({ auth }) =>
    (auth.user)
      ? true
      : false,

  'is_not_signed_in': ({ auth }) =>
    (!auth.user)
      ? true
      : false,

  'is_admin': ({ auth }) =>
    (auth.user && auth.user.roles.ADMIN)
      ? true
      : false,
}
