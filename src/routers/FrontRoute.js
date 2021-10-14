import React from 'react';
import { Route } from 'react-router-dom';

import BodyClass from './BodyClass';
import Header from '../components/front/Header';
import Footer from '../components/front/Footer';

const FrontRoute = ({
  component: Component,
  ...rest
}) => (
  <Route {...rest} component={(props) => (
      <>
        <BodyClass nameClass="front"/>
        <Header />
        <Component {...props} />
        <Footer />
      </>
    )
  } />
);

export default FrontRoute;
