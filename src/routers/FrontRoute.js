import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import ShadowWrapper from 'react-shadow-wrapper';

import BodyClass from './BodyClass';
import Header from '../components/front/Header';
import Footer from '../components/front/Footer';

const FrontRoute = ({
  component: Component,
  ...rest
}) => (
  <Route {...rest} component={(props) => (
      <ShadowWrapper>
        <BodyClass nameClass="front"/>
        <Header />
        <Component {...props} />
        <Footer />
      </ShadowWrapper>
    )
  } />
);

export default FrontRoute;
