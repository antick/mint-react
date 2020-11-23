import React from 'react';
import { mount } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { cleanup } from '@testing-library/react';
import store from '../../../utils/store';
import AuthRoute from '../AuthRoute';
import Login from '../../Guest/Login';

describe('test AuthRoute component', () => {
  const configuredStore = store();

  afterEach(cleanup);

  it('should render Login component if user is not logged in', () => {
    const isAuthenticated = false;

    const wrapper = mount(
      <Provider store={configuredStore}>
        <Router>
          <AuthRoute
            exact
            path='/'
            component={Login}
            auth={isAuthenticated}
          />
        </Router>
      </Provider>
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
