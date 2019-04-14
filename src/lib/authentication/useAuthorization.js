import React from 'react';
import { useState, useEffect, useContext } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';

// import { FirebaseContext } from 'lib/firebase';
import * as ROUTES from 'config/constants/routes';

const RedirectBase = (props) => {
  props.history.push(ROUTES.AUTH_SIGN_IN.route);

  return null;
}

const Redirect = compose(withRouter)(RedirectBase);

export const useAuthorization = (condition) => {
  // const firebase = useContext(FirebaseContext);

  return {
    redirectIfConditionIsFalse: () => (!condition) ? <Redirect /> : null,
    isAllowed: () => (!condition) ? false : true
  };
}
