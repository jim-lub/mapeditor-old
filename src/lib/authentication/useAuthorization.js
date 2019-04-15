import { useRedirect } from 'lib/authentication';

import * as ROUTES from 'config/constants/routes';

export const useAuthorization = () => {
  const redirect = useRedirect();

  return ({rules = [], route = null}) => {
    const check = (rules.filter(rule => rule).length > 0);

    if (route && check) {
      return redirect.to(ROUTES[route].route)
    }

    if (check) {
      return check
    }
    return null;
  }
}
