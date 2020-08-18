import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import Dashboard from '../components/User/Dashboard';
import LeftNavigation from '../components/Layout/LeftNavigation';
import RightNavigation from '../components/Layout/RightNavigation';

describe('test App component', () => {
  it('should render without crashing', () => {
    shallow(<App />);
  });
});

describe('test User Dashboard component', () => {
  it('should render without crashing', () => {
    shallow(<Dashboard />);
  });
});

describe('test LeftNavigation component', () => {
  it('should render without crashing', () => {
    shallow(<LeftNavigation />);
  });
});

describe('test RightNavigation component', () => {
  it('should render without crashing', () => {
    shallow(<RightNavigation />);
  });
});
