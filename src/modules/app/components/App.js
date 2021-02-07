import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import PropTypes from 'prop-types';
import { get } from 'lodash';
import NotFound from '../../auth/components/NotFound';
import Container from './Layout/Container';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';
import routes from '../../../config/routes';

const App = ({ history }) => (
  <ConnectedRouter history={history}>
    <Switch>
      {routes.filter(route => get(route, 'public', false)).map((prop, key) => (
        <PublicRoute exact={!!prop.exact} path={prop.path} component={prop.component} key={key} />
      ))}
      <PrivateRoute path='/' component={Container} history={history} />
      <Route component={NotFound} />
    </Switch>
  </ConnectedRouter>
);

App.propTypes = {
  history: PropTypes.object
};

export default App;
