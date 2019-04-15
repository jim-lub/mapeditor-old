import { useState, useEffect, useContext } from 'react';

import { useFirebase } from 'lib/firebase';

export const useAuthentication = () => {
  const [authUser, setAuthUser] = useState({
    isLoading: true,
    user: null
  });
  const firebase = useFirebase();

  useEffect(
    () => {
      const listener =
        firebase.auth
          .onAuthStateChanged(authUser =>
            setAuthUser({
              isLoading: false,
              user: authUser
            })
          );

      return listener;
  }, [firebase.auth]);

  return authUser;
}
