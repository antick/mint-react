import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import userActions from '../../actions/user.action';
import { userService } from '../../services';
import { auth } from '../../utils';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = auth.isAuthenticated();
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      // Dispatch actions only if the token is available and auth is set
      if (isAuthenticated) {
        const loggedIn = await userService.isLoggedIn();

        if (!loggedIn) {
          dispatch(userActions.logout());
        }
      }
    })();
  });

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
  auth: PropTypes.bool
};

export default ProtectedRoute;
