import React from 'react';
import { mount } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';
import { cleanup } from '@testing-library/react';
import ProtectedRoute from '../ProtectedRoute';
import Main from '../../Layout/Main';

describe('test ProtectedRoute component', () => {
  afterEach(cleanup);

  it('should render a protected component', () => {
    const isAuthenticated = true;
    const wrapper = mount(
      <Router>
        <ProtectedRoute
          exact
          path='/'
          component={Main}
          auth={isAuthenticated}
        />
      </Router>
    );

    expect(wrapper.find(Main)).toHaveLength(1);
  });

  it('should not render a protected component', () => {
    const isAuthenticated = false;
    const wrapper = mount(
      <Router>
        <ProtectedRoute
          exact
          path='/'
          component={Main}
          auth={isAuthenticated}
        />
      </Router>
    );

    expect(wrapper.find(Main)).toHaveLength(0);
  });
});
