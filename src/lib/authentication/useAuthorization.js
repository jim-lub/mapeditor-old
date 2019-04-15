// import React from 'react';
// import { useState, useEffect, useContext } from 'react';
// import { withRouter } from 'react-router-dom';
// import { compose } from 'recompose';

// import { FirebaseContext } from 'lib/firebase';

export const useAuthorization = () => {
  // const [role, setRole] = useState(null);
  // const [permissions, setPermissions] = useState(null);
  // const firebase = useContext(FirebaseContext);

  return {
    condition: (condition) => (!condition) ? false : true
  };
}
