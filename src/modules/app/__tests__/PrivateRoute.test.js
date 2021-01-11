import React from 'react';
import { mount, shallow } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../../store';
import PrivateRoute from '../components/PrivateRoute';
import MainContainer from '../components/Layout/MainContainer';

describe('the PrivateRoute component', () => {
  const configuredStore = store();

  it('should render a protected component', () => {
    const isAuthenticated = true;
    shallow(
      <Provider store={configuredStore}>
        <Router>
          <PrivateRoute
            exact
            path='/'
            component={MainContainer}
            auth={isAuthenticated}
          />
        </Router>
      </Provider>
    );
  });

  it('should not render a protected component', () => {
    const isAuthenticated = false;
    const wrapper = mount(
      <Provider store={configuredStore}>
        <Router>
          <PrivateRoute
            exact
            path='/'
            component={MainContainer}
            auth={isAuthenticated}
          />
        </Router>
      </Provider>
    );

    expect(wrapper.find(MainContainer)).toHaveLength(0);
  });
});
