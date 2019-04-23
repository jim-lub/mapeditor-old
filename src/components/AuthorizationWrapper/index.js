import React, { Fragment } from 'react';

import { useAuthorization } from 'lib/auth';

import Loader from 'components/base/Loader';

export default (props) => {
  const authorization = useAuthorization({
    rules: props.rules || [],
    route: props.route || null
  });

  if (authorization.isLoading) {
    return <Loader />;
  }

  if (!authorization.hasAccess) {
    return (
      <Fragment>
        {/*** AUTH REDIRECT ***/}
          {authorization.redirect()}
      </Fragment>
    )
  }

  if (authorization.hasAccess) {
    return (
      <Fragment>
        {/* render component */}
          {props.children}
      </Fragment>
    )
  }

  return null;
}
