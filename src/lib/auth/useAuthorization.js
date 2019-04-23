import { useState, useEffect } from 'react';

import { useAuthentication } from 'lib/auth';
import { useRedirect } from 'lib/auth';

import * as ROUTES from 'config/constants/routes';
import { RULES } from 'config/authorization_rules';

export const useAuthorization = (props) => {
  const [access, setAccess] = useState(true),
        [loading, setLoading] =  useState(true),
        [rules, setRules] = useState([]),
        [route, setRoute] = useState(null);

  const auth = useAuthentication(),
        redirect = useRedirect();

  useEffect(
    () => {
      if (!props || auth.isLoading) return;

      setRules(props.rules);
      setRoute(props.route || null);
    }, [auth]);

  useEffect(
    () => {
      if (rules.length === 0 || auth.isLoading) return;

      (
        rules
        .filter(rule => RULES[`${rule}`]({auth}))
        .length !== rules.length
      )
        ? setAccess(false)
        : setAccess(true);

      setLoading(false);
  }, [rules, auth]);

  return {
    redirect: () =>
      (access)
        ? null
        : redirect.to(ROUTES[route].route),

    hasAccess: access,
    isLoading: loading
  }
}
