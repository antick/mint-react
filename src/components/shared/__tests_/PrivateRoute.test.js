import React from 'react';
import { mount, shallow } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';
import { cleanup } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../../utils/store';
import PrivateRoute from '../PrivateRoute';
import MainContainer from '../../Layout/MainContainer';

describe('test PrivateRoute component', () => {
  const configuredStore = store();

  afterEach(cleanup);

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
