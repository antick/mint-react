import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import PropTypes from 'prop-types';
import Login from './Guest/Login';
import Register from './Guest/Register';
import NotFound from './Guest/NotFound';
import Main from './Layout/Main';
import AuthRoute from './shared/AuthRoute';
import ProtectedRoute from './shared/ProtectedRoute';

const App = ({ history }) => (
  <ConnectedRouter history={history}>
    <Switch>
      <AuthRoute path='/login' component={Login} />
      <AuthRoute path='/register' component={Register} />

      <ProtectedRoute path='/' component={Main} history={history} />

      <Route component={NotFound} />
    </Switch>
  </ConnectedRouter>
);

App.propTypes = {
  history: PropTypes.object
};

export default App;
