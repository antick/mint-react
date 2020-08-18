import React from 'react';
import { mount } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';
import { cleanup } from '@testing-library/react';
import AuthRoute from '../AuthRoute';
import Login from '../../Guest/Login';

describe('test AuthRoute component', () => {
  afterEach(cleanup);

  it('should render Login component if user is not logged in', () => {
    const isAuthenticated = false;
    const wrapper = mount(
      <Router>
        <AuthRoute
          exact
          path='/'
          component={Login}
          auth={isAuthenticated}
        />
      </Router>
    );

    expect(wrapper.find(Login)).toHaveLength(1);
  });

  it('should not render Login component if user is already logged in', () => {
    const isAuthenticated = true;
    const wrapper = mount(
      <Router>
        <AuthRoute
          exact
          path='/'
          component={Login}
          auth={isAuthenticated}
        />
      </Router>
    );

    expect(wrapper.find(Login)).toHaveLength(0);
  });
});
