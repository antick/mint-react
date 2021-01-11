import React from 'react';
import { mount } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../../store';
import PublicRoute from '../components/PublicRoute';
import Login from '../../auth/components/Login';

describe('the PublicRoute component', () => {
  const configuredStore = store();

  it('should render Login component if user is not logged in', () => {
    const isAuthenticated = false;

    const wrapper = mount(
      <Provider store={configuredStore}>
        <Router>
          <PublicRoute
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
});
