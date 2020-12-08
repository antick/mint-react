import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import PropTypes from 'prop-types';
import Login from '../../auth/components/Login';
import Register from '../../auth/components/Register';
import ForgotPassword from '../../auth/components/ForgotPassword';
import ResetPassword from '../../auth/components/ResetPassword';
import NotFound from '../../auth/components/NotFound';
import MainContainer from '../../shared/components/Layout/MainContainer';
import PublicRoute from '../../shared/components/PublicRoute';
import PrivateRoute from '../../shared/components/PrivateRoute';

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
