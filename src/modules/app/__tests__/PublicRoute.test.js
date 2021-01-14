import React from 'react';
import { mount } from 'enzyme';
import { BrowserRouter as Router, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../../store';
import PublicRoute from '../components/PublicRoute';
import Login from '../../auth/components/Login';
import auth from '../../auth/utilities/authUtility';

describe('the PublicRoute component', () => {
  const configuredStore = store();

  it('should render Login component if user is not logged in', () => {
    jest.spyOn(auth, 'isAuthenticated').mockImplementation(() => false);

    const wrapper = mount(
      <Provider store={configuredStore}>
        <Router>
          <PublicRoute
            exact
            path='/'
            component={Login}
          />
        </Router>
      </Provider>
    );

    expect(wrapper.find(Login)).toHaveLength(1);
  });

  it('should redirect to root page is user is already logged in', () => {
    jest.spyOn(auth, 'isAuthenticated').mockImplementation(() => true);

    const wrapper = mount(
      <Provider store={configuredStore}>
        <Router>
          <PublicRoute
            exact
            path='/'
            component={Login}
          />
        </Router>
      </Provider>
    );

    expect(wrapper.find(Redirect)).toHaveLength(1);
  });
});
