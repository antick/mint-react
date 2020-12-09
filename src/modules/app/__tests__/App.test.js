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

// TODO: https://github.com/enzymejs/enzyme/issues/2429
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

describe('test MainContainer component', () => {
  it('should render without crashing', () => {
    shallow(<MainContainer />);
  });
});
