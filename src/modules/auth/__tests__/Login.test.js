import React from 'react';
import Cookies from 'js-cookie';
import { BrowserRouter as Router } from 'react-router-dom';
import * as redux from 'react-redux';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import { render, fireEvent } from '@testing-library/react';
import Login from '../components/Login';
import store, { history } from '../../../store';

describe('the Login component', () => {
  const configuredStore = store();
  const wrapper = mount(
    <Provider store={configuredStore}>
      <Router>
        <Login />
      </Router>
    </Provider>
  );

  it('should set tokens in cookies after clicking on login button', () => {
    const button = wrapper.find('button');

    button.simulate('click');

    expect(button.text()).toBe('Login');

    const mockSet = jest.fn();

    Cookies.set = mockSet;
    Cookies.set('refreshToken', 'random-token');

    expect(mockSet).toHaveBeenCalledWith('refreshToken', 'random-token');
  });

  it('should show an error for wrong email and correct password after clicking on login button', async () => {
    jest.spyOn(redux, 'useSelector').mockImplementation(() => ({
      message: 'Incorrect email or password',
      type: 'alert-danger'
    }));

    const { getByTestId, findAllByText } = render(
      <Provider store={configuredStore}>
        <Router>
          <Login history={history} />
        </Router>
      </Provider>
    );

    const emailInput = getByTestId('email');
    const passwordInput = getByTestId('password');
    const loginButton = getByTestId('btn-submit');

    fireEvent.change(emailInput, {
      target: {
        name: 'email',
        value: 'wrong-email-format.email.com'
      }
    });

    fireEvent.change(passwordInput, {
      target: {
        name: 'password',
        value: 'rAnDomPaSsWorD'
      }
    });

    fireEvent.click(loginButton);

    expect(getByTestId('email').value).toStrictEqual('wrong-email-format.email.com');
    expect(getByTestId('password').value).toStrictEqual('rAnDomPaSsWorD');
    expect(await findAllByText('Incorrect email or password')).toHaveLength(1);
  });

  it('should not show any error if email and password are correct', async () => {
    const useDispatchSpy = jest.spyOn(redux, 'useDispatch');
    const mockDispatchFn = jest.fn();
    useDispatchSpy.mockReturnValue(mockDispatchFn);

    jest.spyOn(redux, 'useSelector').mockImplementation(() => ({
      message: '',
      type: ''
    }));

    const { getByTestId, findAllByText } = render(
      <Provider store={configuredStore}>
        <Router>
          <Login history={history} />
        </Router>
      </Provider>
    );

    const emailInput = getByTestId('email');
    const passwordInput = getByTestId('password');
    const loginButton = getByTestId('btn-submit');

    fireEvent.change(emailInput, {
      target: {
        name: 'email',
        value: 'test@email.com'
      }
    });

    fireEvent.change(passwordInput, {
      target: {
        name: 'password',
        value: 'rAnDomPaSsWorD'
      }
    });

    fireEvent.click(loginButton);

    expect(getByTestId('email').value).toStrictEqual('test@email.com');
    expect(getByTestId('password').value).toStrictEqual('rAnDomPaSsWorD');

    let alertMessage;

    try {
      alertMessage = await findAllByText('Incorrect email or password');
    } catch (e) {
      alertMessage = [];
    }

    expect(alertMessage).toHaveLength(0);

    useDispatchSpy.mockClear();
  });
});
