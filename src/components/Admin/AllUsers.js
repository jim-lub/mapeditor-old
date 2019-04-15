import React from 'react';
import { useState, useEffect } from 'react';

import { useFirebase } from 'lib/firebase';

export const AllUsers = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const firebase = useFirebase();

  useEffect(
    () => {
      setLoading({ loading: true });

      const listener = firebase.users().onSnapshot(snapshot => {
        let users = [];

        snapshot.forEach(doc =>
          users.push({ ...doc.data(), uid: doc.id })
        );

        setUsers(users);
        setLoading(false);
      });

      return listener;
    }, [firebase]);

  return (
    (!loading)
    ? <div>
        {
          users.map(user => {
            console.log(user);
            return (<div>{user.email}, {user.username}, {user.uid}</div>)
          })
        }
      </div>
    : <div>Loading..</div>
  )
}
