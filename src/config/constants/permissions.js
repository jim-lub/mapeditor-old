export default {
  isGuest: (user) => !user,
  isMember: (user) => !!user,
  isAdmin: () => false
}
