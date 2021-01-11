import React from 'react';
import { shallow, mount } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from '../components/App';
import LeftNavigation from '../components/Layout/LeftNavigation';
import UserList from '../../user/components/UserList';
import store from '../../../store';
import MainContainer from '../components/Layout/MainContainer';

const configuredStore = store();

describe('the App component', () => {
  it('should render without crashing', () => {
    shallow(<App />);
  });
});

describe('the LeftNavigation component', () => {
  it('should render without crashing', () => {
    mount(
      <Provider store={configuredStore}>
        <Router>
          <LeftNavigation />
        </Router>
      </Provider>
    );
  });
});

describe('the UserList component', () => {
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

describe('the MainContainer component', () => {
  it('should render without crashing', () => {
    shallow(<MainContainer />);
  });
});
