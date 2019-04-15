import React from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';

const RedirectBase = ({history, route}) => {
  history.push(route);
  return null;
}

const Redirect = compose(withRouter)(RedirectBase);

export const useRedirect = () => {
  return {
    to: (route) => <Redirect route={route} />
  }
}
