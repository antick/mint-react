import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import MainDashboard from '../Dashboard/MainDashboard';
import LeftNavigation from '../Layout/LeftNavigation';
import UserList from '../User/UserList';

describe('test App component', () => {
  it('should render without crashing', () => {
    shallow(<App />);
  });
});

describe('test User MainDashboard component', () => {
  it('should render without crashing', () => {
    shallow(<MainDashboard />);
  });
});

describe('test LeftNavigation component', () => {
  it('should render without crashing', () => {
    shallow(<LeftNavigation />);
  });
});

describe('test UserList component', () => {
  it('should render without crashing', () => {
    shallow(<UserList />);
  });
});
