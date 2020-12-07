import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import PropTypes from 'prop-types';
import Login from './Public/Login';
import Register from './Public/Register';
import ForgotPassword from './Public/ForgotPassword';
import ResetPassword from './Public/ResetPassword';
import NotFound from './Public/NotFound';
import MainContainer from './Layout/MainContainer';
import PublicRoute from './shared/PublicRoute';
import PrivateRoute from './shared/PrivateRoute';

const App = ({ history }) => (
  <ConnectedRouter history={history}>
    <Switch>
      <PublicRoute path='/login' component={Login} />
      <PublicRoute path='/register' component={Register} />
      <PublicRoute path='/forgot-password' component={ForgotPassword} />
      <PublicRoute path='/reset-password' component={ResetPassword} />

      <PrivateRoute path='/' component={MainContainer} history={history} />

      <Route component={NotFound} />
    </Switch>
  </ConnectedRouter>
);

App.propTypes = {
  history: PropTypes.object
};

export default App;
