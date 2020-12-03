import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { auth } from '../../utils';

const AuthRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = auth.isAuthenticated();

  return (
    <Route {...rest} render={props => (
      isAuthenticated === false
        ? <Component auth={isAuthenticated} {...props} {...rest} />
        : <Redirect to='/' />
    )} />
  );
};

AuthRoute.propTypes = {
  component: PropTypes.any.isRequired,
  auth: PropTypes.bool
};

export default AuthRoute;
