import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import {
  render, waitFor, screen, fireEvent
} from '@testing-library/react';
import * as redux from 'react-redux';
import userEvent from '@testing-library/user-event';
import axios from 'axios';
import store, { history } from '../../../store';
import ForgotPassword from '../components/ForgotPassword';

jest.mock('axios');

describe('the ForgotPassword component', () => {
  const configuredStore = store();

  it('should have a disabled submit button if email is not entered', async () => {
    render(
      <Provider store={configuredStore}>
        <Router>
          <ForgotPassword history={history} />
        </Router>
      </Provider>
    );

    expect(screen.getByTestId('btn-submit')).toBeDisabled();
  });

  it('should send a password reset email', async () => {
    jest.spyOn(redux, 'useSelector').mockImplementation(() => ({ submitting: false }));

    render(
      <Provider store={configuredStore}>
        <Router>
          <ForgotPassword history={history} />
        </Router>
      </Provider>
    );

    const form = screen.getByTestId('forgot-password-form');
    const emailInput = screen.getByTestId('email');

    userEvent.type(emailInput, 'pankaj@desk.sh');
    fireEvent.submit(form);

    await waitFor(() => {
      axios.post.mockResolvedValue({});
      expect(axios.post).toHaveBeenCalledTimes(1);
      expect(axios.post).toHaveBeenCalledWith(
        'auth/forgot-password',
        {
          email: 'pankaj@desk.sh'
        }
      );
    });
  });

  it('should not submit forgot-password form if its in submitting state', async () => {
    jest.spyOn(redux, 'useSelector').mockImplementation(() => ({ submitting: true }));

    render(
      <Provider store={configuredStore}>
        <Router>
          <ForgotPassword history={history} />
        </Router>
      </Provider>
    );

    const form = screen.getByTestId('forgot-password-form');
    const emailInput = screen.getByTestId('email');

    userEvent.type(emailInput, 'pankaj@desk.sh');
    fireEvent.submit(form);

    await waitFor(() => {
      expect(screen.getByTestId('email').value).toStrictEqual('pankaj@desk.sh');
    });
  });
});
