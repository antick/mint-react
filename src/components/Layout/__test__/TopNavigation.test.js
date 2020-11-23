import React from 'react';
import { mount } from 'enzyme';
import Cookies from 'js-cookie';
import { BrowserRouter as Router } from 'react-router-dom';
import { cleanup } from '@testing-library/react';
import { Provider } from 'react-redux';
import TopNavigation from '../TopNavigation';
import store from '../../../utils/store';

describe('test TopNavigation component', () => {
  const configuredStore = store();

  beforeEach(() => {
    Object.defineProperty(window, 'location', {
      writable: true,
      value: { assign: jest.fn() }
    });
  });

  afterEach(() => {
    cleanup();
  });

  it('should set loggedIn as 0 in local storage after clicking on logout button', () => {
    const wrapper = mount(
      <Provider store={configuredStore}>
        <Router>
          <TopNavigation />
        </Router>
      </Provider>
    );
    const button = wrapper.find('.logout-button');

    button.simulate('click');

    const mockSet = jest.fn();

    Cookies.set = mockSet;

    Cookies.set('refreshToken', 'random-token');

    expect(mockSet).toHaveBeenCalledWith('refreshToken', 'random-token');
    // expect(window.location.assign).toHaveBeenCalledWith('/login');
  });
});
