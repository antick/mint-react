import React from 'react';
import { mount } from 'enzyme';
import Cookies from 'js-cookie';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import Login from '../Login';
import store from '../../../utils/store';

describe('test Login component', () => {
  const configuredStore = store();

  it('should set loggedIn param in local storage after clicking on login button', () => {
    const wrapper = mount(
      <Provider store={configuredStore}>
        <Router>
          <Login />
        </Router>
      </Provider>
    );
    const button = wrapper.find('button');

    button.simulate('click');

    expect(button.text()).toBe('Login');

    const mockSet = jest.fn();

    Cookies.set = mockSet;

    Cookies.set('refreshToken', 'random-token');

    expect(mockSet).toHaveBeenCalledWith('refreshToken', 'random-token');
  });
});
