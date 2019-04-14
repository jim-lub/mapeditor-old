import React from 'react';
import { useContext } from 'react';

import { FirebaseContext } from 'lib/firebase';
import { useAuthentication } from 'lib/authentication';
import { useAuthorization } from 'lib/authentication';

export default () => {
  const firebase = useContext(FirebaseContext);
  const auth = useAuthentication();
  const authorization = useAuthorization(false);

  console.log('userData: ', auth.user);

  if (auth.isLoading) {
    return (
      <div className="panel__small">
      <h1>Loading user data..</h1>
      </div>
    )
  }

  if (auth.user) {
    return (
      <div className="panel__small">
      <h1>Dashboard</h1>
      <h3>Hello, {(auth.user) ? auth.user.email : "guest"}</h3>
      <button type="button" onClick={firebase.doSignOut}>Sign Out</button>
      </div>
    )
  }

  return (
    <div className="panel__small">
      {authorization.redirectIfConditionIsFalse()}
      <h1>Dashboard</h1>
      <h3>Hello, Guest</h3>
    </div>
  )
}
