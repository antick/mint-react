import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import userActions from '../../actions/user.action';
import { userService } from '../../services';
import { auth } from '../../utils';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = auth.isAuthenticated();
  const isRefreshTokenAvailable = auth.isRefreshTokenAvailable();
  const dispatch = useDispatch();

  const [isAuth, setIsAuth] = useState(isAuthenticated);

  useEffect(() => {
    (async () => {
      // Request for a token if refresh token is available but access token is expired
      if (isRefreshTokenAvailable && !isAuthenticated) {
        const loggedIn = await userService.isLoggedIn();

        if (loggedIn) {
          setIsAuth(true);
        } else {
          dispatch(userActions.logout());
        }
      }
    })();
  });

  return (
    <Route {...rest} render={props => (
      isAuth === true
        ? <Component auth={isAuth} {...props} {...rest} />
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
