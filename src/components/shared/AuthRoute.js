import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

const AuthRoute = ({ component: Component, auth, ...rest }) => (
  <Route {...rest} render={props => (
    auth === false
      ? <Component auth={auth} {...props} {...rest} />
      : <Redirect to='/' />
  )} />
);

AuthRoute.propTypes = {
  component: PropTypes.any.isRequired,
  auth: PropTypes.bool
};

export default AuthRoute;
