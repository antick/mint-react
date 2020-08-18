import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, auth, ...rest }) => (
  <Route {...rest} render={props => (
    auth === true
      ? <Component auth={auth} {...props} {...rest} />
      : <Redirect to='/login' />
  )} />
);

ProtectedRoute.propTypes = {
  component: PropTypes.any.isRequired,
  auth: PropTypes.bool
};

export default ProtectedRoute;
