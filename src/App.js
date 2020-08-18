import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Login from './components/Guest/Login';
import Register from './components/Guest/Register';
import NotFound from './components/Guest/NotFound';
import Main from './components/Layout/Main';
import AuthRoute from './components/shared/AuthRoute';
import ProtectedRoute from './components/shared/ProtectedRoute';

const App = () => {
  const isAuthenticated = localStorage.getItem('loggedIn') === '1';

  return (
    <Router>
      <Switch>
        <ProtectedRoute exact path='/' component={Main} auth={isAuthenticated} />

        <AuthRoute path='/login' component={Login} auth={isAuthenticated} />
        <AuthRoute path='/register' component={Register} auth={isAuthenticated} />

        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export default App;
