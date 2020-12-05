import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import useSilentToken from '../../hooks/useSilentToken';
import { auth } from '../../utils';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = auth.isAuthenticated();

  useSilentToken();

  return (
    <Route {...rest} render={props => (
      isAuthenticated === true
        ? <Component auth={isAuthenticated} {...props} {...rest} />
        : <Redirect to='/login' />
    )} />
  );
};

ProtectedRoute.propTypes = {
  component: PropTypes.any.isRequired,
  history: PropTypes.object,
  auth: PropTypes.bool
};

export default ProtectedRoute;
