import React from 'react';
import { Route } from 'react-router-dom';

import Sidebar from 'components/Sidebar';
import * as ROUTES from 'config/constants/routes';

export const App = () => {
  return (
    <div className="layout__wrapper">
        {
          Object.values(ROUTES)
            .map((route, index) => <Route exact={route.exact} key={index} path={route.route} component={route.component} />)
        }
    </div>
  )
}

// <div className="layout__sidebar">
//   <Sidebar />
// </div>
