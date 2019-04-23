import { useState, useEffect } from 'react';

import { useFirebase } from 'lib/firebase';

export const useAuthentication = () => {
  const [authUser, setAuthUser] = useState({
    isLoading: true,
    user: JSON.parse(localStorage.getItem('authUser'))
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

                  localStorage.setItem('authUser', JSON.stringify(authUser));
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
              localStorage.removeItem('authUser');
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
