import React from 'react';
import { mount } from 'enzyme';
import Cookies from 'js-cookie';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../../utils/store';
import Register from '../Register';

describe('test Register component', () => {
  const configuredStore = store();

  it('should set cookie after clicking on register button', () => {
    const wrapper = mount(
      <Provider store={configuredStore}>
        <Router>
          <Register />
        </Router>
      </Provider>
    );
    const button = wrapper.find('.guest-btn');

    button.simulate('click');

    const mockSet = jest.fn();

    Cookies.set = mockSet;

    Cookies.set('refreshToken', 'random-token');

    expect(mockSet).toHaveBeenCalledWith('refreshToken', 'random-token');
  });
});
