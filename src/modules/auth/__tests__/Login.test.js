import React from 'react';
import Cookies from 'js-cookie';
import { BrowserRouter as Router } from 'react-router-dom';
import * as redux from 'react-redux';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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

  it('should have a disabled login button if email/password is not entered', async () => {
    render(
      <Provider store={configuredStore}>
        <Router>
          <Login history={history} />
        </Router>
      </Provider>
    );

    expect(screen.getByTestId('btn-submit')).toBeDisabled();
  });

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

    render(
      <Provider store={configuredStore}>
        <Router>
          <Login history={history} />
        </Router>
      </Provider>
    );

    const emailInput = screen.getByTestId('email');
    const passwordInput = screen.getByTestId('password');
    const loginButton = screen.getByTestId('btn-submit');

    userEvent.type(emailInput, 'wrong-email-format.email.com');
    userEvent.type(passwordInput, 'rAnDomPaSsWorD');
    userEvent.click(loginButton);

    expect(screen.getByTestId('email').value).toStrictEqual('wrong-email-format.email.com');
    expect(screen.getByTestId('password').value).toStrictEqual('rAnDomPaSsWorD');
    expect(await screen.findByText('Incorrect email or password')).toBeInTheDocument();
  });

  it('should not show any error if email and password are correct', () => {
    const useDispatchSpy = jest.spyOn(redux, 'useDispatch');
    const mockDispatchFn = jest.fn();
    useDispatchSpy.mockReturnValue(mockDispatchFn);

    jest.spyOn(redux, 'useSelector').mockImplementation(() => ({
      message: '',
      type: ''
    }));

    render(
      <Provider store={configuredStore}>
        <Router>
          <Login history={history} />
        </Router>
      </Provider>
    );

    const emailInput = screen.getByTestId('email');
    const passwordInput = screen.getByTestId('password');
    const loginButton = screen.getByTestId('btn-submit');

    userEvent.type(emailInput, 'test@email.com');
    userEvent.type(passwordInput, 'rAnDomPaSsWorD');
    userEvent.click(loginButton);

    expect(screen.getByTestId('email').value).toStrictEqual('test@email.com');
    expect(screen.getByTestId('password').value).toStrictEqual('rAnDomPaSsWorD');
    expect(screen.queryByText('Incorrect email or password')).not.toBeInTheDocument();

    useDispatchSpy.mockClear();
  });
});
