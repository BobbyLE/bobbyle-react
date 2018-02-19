import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import ShadowWrapper from 'react-shadow-wrapper';

import BodyClass from './BodyClass';
import Header from '../components//admin/Header';

export const PrivateRoute = ({
  isAuthenticated,
  component: Component,
  ...rest
}) => (
    <Route {...rest} component={(props) => (
      isAuthenticated ? (
        <ShadowWrapper>
          <BodyClass nameClass="admin"/>
          <Header />
          <Component {...props} />
        </ShadowWrapper>
      ) : (
          <Redirect to="/admin" />
        )
    )} />
  );

const mapStateToProps = (state) => ({
  isAuthenticated: !!state.auth.uid
});

export default connect(mapStateToProps)(PrivateRoute);
