import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PortfolioRoute = ({
  component: Component,
  ...rest
}) => (
  <Route {...rest} component={(props) => (
      <Component {...props} />
    )
  } />
);

export default PortfolioRoute;
