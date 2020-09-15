import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Router } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import alertActions from '../actions/alert.action';
import history from '../utils/history';
import Login from './Guest/Login';
import Register from './Guest/Register';
import NotFound from './Guest/NotFound';
import Main from './Layout/Main';
import AuthRoute from './shared/AuthRoute';
import ProtectedRoute from './shared/ProtectedRoute';

const App = () => {
  const isAuthenticated = useSelector(state => state.authentication.loggingIn) || false;
  console.log('authenticated');
  console.log(isAuthenticated);

  const dispatch = useDispatch();

  useEffect(() => {
    history.listen(() => {
      dispatch(alertActions.clear());
    });
  }, [dispatch]);

  return (
    <Router history={history}>
      <Switch>
        <AuthRoute path='/login' component={Login} auth={isAuthenticated} />
        <AuthRoute path='/register' component={Register} auth={isAuthenticated} />

        <ProtectedRoute path='/' component={Main} auth={isAuthenticated} />

        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export default App;
