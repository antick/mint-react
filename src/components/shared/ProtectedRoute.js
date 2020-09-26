import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import userActions from '../../actions/user.action';
import { userService } from '../../services';

const ProtectedRoute = ({ component: Component, auth, ...rest }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      // No need to dispatch anything if the token is not available
      if (auth) {
        const loggedIn = await userService.isLoggedIn();

        if (!loggedIn) {
          dispatch(userActions.logout());
        }
      }
    })();
  });

  return (
    <Route {...rest} render={props => (
      auth === true
        ? <Component auth={auth} {...props} {...rest} />
        : <Redirect to='/login' />
    )} />
  );
};

ProtectedRoute.propTypes = {
  component: PropTypes.any.isRequired,
  auth: PropTypes.bool
};

export default ProtectedRoute;
