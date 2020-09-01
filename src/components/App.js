import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Login from './Guest/Login';
import Register from './Guest/Register';
import NotFound from './Guest/NotFound';
import Main from './Layout/Main';
import AuthRoute from './shared/AuthRoute';
import ProtectedRoute from './shared/ProtectedRoute';

const App = () => {
  const isAuthenticated = localStorage.getItem('loggedIn') === '1';

  return (
    <Router>
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
