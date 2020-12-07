import React from 'react';
import { mount } from 'enzyme';
import Cookies from 'js-cookie';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { act } from '@testing-library/react';
import * as redux from 'react-redux';
import Login from '../Login';
import store from '../../../../store';

describe('test Login component', () => {
  const configuredStore = store();

  // TODO: Refactor this test case, cookies should set only when login in successful
  it('should set tokens in cookies after clicking on login button', () => {
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

  it('should set state if wrong email and correct password inputs are set when clicked on login button', () => {
    const wrapper = mount(
      <Provider store={configuredStore}>
        <Router>
          <Login />
        </Router>
      </Provider>
    );

    const emailInput = wrapper.find('#email');
    const passwordInput = wrapper.find('#password');
    const loginButton = wrapper.find('#btn-submit');

    act(() => {
      emailInput.props().onChange({
        target: {
          name: 'email',
          value: 'wrong-email-format.email.com'
        }
      });

      emailInput.props().onChange({
        target: {
          name: 'password',
          value: 'rAnDomPaSsWorD'
        }
      });
    });

    emailInput.simulate('change');
    passwordInput.simulate('change');
    loginButton.simulate('click');

    expect(wrapper.find('#email').props().value).toStrictEqual('wrong-email-format.email.com');
    expect(wrapper.find('#password').props().value).toStrictEqual('rAnDomPaSsWorD');
    expect(wrapper.find('#error-placeholder').getElements()).toHaveLength(0);
  });

  // TODO: Properly test alert dispatch here and cover the remaining test case
  it('should set state if correct email and correct password inputs are set when clicked on login button', () => {
    const useDispatchSpy = jest.spyOn(redux, 'useDispatch');
    const mockDispatchFn = jest.fn();
    useDispatchSpy.mockReturnValue(mockDispatchFn);

    const wrapper = mount(
      <Provider store={configuredStore}>
        <Router>
          <Login />
        </Router>
      </Provider>
    );

    const emailInput = wrapper.find('#email');
    const passwordInput = wrapper.find('#password');
    const loginButton = wrapper.find('#btn-submit');

    act(() => {
      emailInput.props().onChange({
        target: {
          name: 'email',
          value: 'test@email.com'
        }
      });

      emailInput.props().onChange({
        target: {
          name: 'password',
          value: 'rAnDomPaSsWorD'
        }
      });
    });

    emailInput.simulate('change');
    passwordInput.simulate('change');
    loginButton.simulate('click');

    expect(wrapper.find('#email').props().value).toStrictEqual('test@email.com');
    expect(wrapper.find('#password').props().value).toStrictEqual('rAnDomPaSsWorD');
    expect(wrapper.find('#error-placeholder').getElements()).toHaveLength(0);

    useDispatchSpy.mockClear();
  });
});
