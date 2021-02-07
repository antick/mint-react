import React from 'react';
import { shallow, mount } from 'enzyme';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from '../components/App';
import LeftNavigation from '../components/Layout/LeftNavigation';
import Container from '../components/Layout/Container';
import store, { history } from '../../../store';

const configuredStore = store();

describe('the App component', () => {
  it('should render Route component without crashing', () => {
    const wrapper = mount(
      <Provider store={configuredStore}>
        <App history={history} />
      </Provider>
    );

    expect(wrapper.find(Route)).toHaveLength(1);
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

describe('the Container component', () => {
  it('should render without crashing', () => {
    shallow(<Container />);
  });
});
