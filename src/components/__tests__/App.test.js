import React from 'react';
import { shallow, mount } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from '../App';
import LeftNavigation from '../Layout/LeftNavigation';
import UserList from '../User/UserList';
import store from '../../utils/store';
import Main from '../Layout/Main';

const configuredStore = store();

describe('test App component', () => {
  it('should render without crashing', () => {
    shallow(<App />);
  });
});

describe('test LeftNavigation component', () => {
  it('should render without crashing', () => {
    shallow(<LeftNavigation />);
  });
});

describe('test UserList component', () => {
  it('should render without crashing', () => {
    mount(
      <Provider store={configuredStore}>
        <Router>
          <UserList />
        </Router>
      </Provider>
    );
  });
});

describe('test Main component', () => {
  it('should render without crashing', () => {
    shallow(<Main />);
  });
});
