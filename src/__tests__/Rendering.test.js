import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import Dashboard from '../components/Dashboard/Dashboard';
import LeftNavigation from '../components/Navigation/LeftNavigation';
import RightNavigation from '../components/Navigation/RightNavigation';
import TopNavigation from '../components/Navigation/TopNavigation';
import CheckBox from '../components/shared/CheckBox';

describe('test App component', () => {
  it('should render without crashing', () => {
    shallow(<App />);
  });
});

describe('test Dashboard component', () => {
  it('should render without crashing', () => {
    shallow(<Dashboard />);
  });
});

describe('test LeftNavigation components', () => {
  it('should render without crashing', () => {
    shallow(<LeftNavigation />);
  });
});

describe('test RightNavigation components', () => {
  it('should render without crashing', () => {
    shallow(<RightNavigation />);
  });
});

describe('test TopNavigation components', () => {
  it('should render without crashing', () => {
    shallow(<TopNavigation />);
  });
});

describe('test CheckBox components', () => {
  it('should render without crashing', () => {
    shallow(<CheckBox />);
  });
});
