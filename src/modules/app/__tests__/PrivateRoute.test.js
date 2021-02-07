import React from 'react';
import { mount } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../../store';
import PrivateRoute from '../components/PrivateRoute';
import Container from '../components/Layout/Container';
import auth from '../../auth/utilities/authUtility';

describe('the PrivateRoute component', () => {
  const configuredStore = store();

  it('should render the protected component', () => {
    jest.spyOn(auth, 'isAuthenticated').mockImplementation(() => true);

    const wrapper = mount(
      <Provider store={configuredStore}>
        <Router>
          <PrivateRoute
            exact
            path='/'
            component={Container}
          />
        </Router>
      </Provider>
    );

    expect(wrapper.find(Container)).toHaveLength(1);
  });

  it('should not render the protected component', () => {
    jest.spyOn(auth, 'isAuthenticated').mockImplementation(() => false);

    const wrapper = mount(
      <Provider store={configuredStore}>
        <Router>
          <PrivateRoute
            exact
            path='/'
            component={Container}
          />
        </Router>
      </Provider>
    );

    expect(wrapper.find(Container)).toHaveLength(0);
  });
});
