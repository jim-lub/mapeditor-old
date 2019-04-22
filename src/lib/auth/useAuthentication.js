import { useState, useEffect } from 'react';

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
          .onAuthStateChanged(authUser => {
            if (authUser) {
              firebase.user(authUser.uid)
                .get()
                .then(snapshot => {
                  const dbUser = snapshot.data();

                  if (!dbUser.roles) {
                    dbUser.roles = {};
                  }

                  setAuthUser({
                    isLoading: false,
                    user: {
                      uid: authUser.uid,
                      email: authUser.email,
                      ...dbUser
                    }
                  })
                })
            } else {
              setAuthUser({
                isLoading: false,
                user: null
              })
            }
          });

      return listener;
  }, [firebase.auth]);

  return authUser;
}
