import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';
import UserList from '../components/UserList';
import store from '../../../store';

const configuredStore = store();

describe('the UserList component', () => {
  it('should render without crashing', () => {
    mount(
      <Provider store={configuredStore}>
        <Router>
          <UserList/>
        </Router>
      </Provider>
    );
  });
});
