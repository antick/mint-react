import axios from 'axios';
import { alertConstants, userConstants } from '../constants';
import alertActions from './alert.action';
import { auth } from '../../utils';

const refreshTokens = () => dispatch => {
  const refreshToken = auth.getRefreshToken();

  if (refreshToken) {
    axios.post('auth/refresh-tokens', { refreshToken })
      .then(response => {
        if (response.data.access) {
          auth.setAccessToken(response.data.access);
          auth.setRefreshToken(response.data.refresh);

          dispatch({ type: userConstants.TOKEN_REFRESHED });
        }
      })
      .catch(error => {
        auth.removeAllTokens();

        dispatch({ type: userConstants.TOKEN_REMOVED, error: error.response.data.message });
      });
  }
};

const login = ({
  history, email, password, from
}) => dispatch => {
  axios.post('auth/login', { email, password })
    .then(response => {
      auth.setAccessToken(response.data.tokens.access);
      auth.setRefreshToken(response.data.tokens.refresh);

      dispatch({ type: userConstants.LOGIN_SUCCESS, user: response });

      history.push(from);
    })
    .catch(error => {
      dispatch({ type: userConstants.LOGIN_FAILURE, error: error.response.data.message });
      dispatch(alertActions.error(error.response.data.message));
    });
};

const logout = history => dispatch => {
  dispatch({ type: alertConstants.CLEAR });

  const refreshToken = auth.getRefreshToken();

  if (refreshToken) {
    axios.delete(`user/logout/${refreshToken}`)
      .then(() => {
        dispatch({ type: userConstants.LOGOUT });

        auth.removeAllTokens();

        if (history) {
          history.push('/login');
        }
      });
  }
};

const register = (history, user) => dispatch => {
  dispatch({ type: userConstants.REGISTER_REQUEST, user });

  axios.post('auth/register', user)
    .then(userData => {
      dispatch({ type: userConstants.REGISTER_SUCCESS, user: userData });
      dispatch(alertActions.success('Registration successful! Please login now.'));
      history.push('/login');
    })
    .catch(error => {
      dispatch({ type: userConstants.REGISTER_FAILURE, error: error.response.data.message });
      dispatch(alertActions.error(error.response.data.message));
    });
};

const forgotPassword = email => dispatch => {
  dispatch({ type: userConstants.SUBMITTING });
  dispatch({ type: alertConstants.CLEAR });

  axios.post('auth/forgot-password', { email })
    .then(() => {
      dispatch({ type: userConstants.FORGOT_PASSWORD_REQUEST });
      dispatch(alertActions.success('You will receive an email shortly to reset your password!'));
    });
};

const resetPasswordByToken = (history, token, password) => dispatch => {
  dispatch({ type: userConstants.SUBMITTING });
  dispatch({ type: alertConstants.CLEAR });

  axios.post(`auth/reset-password?token=${token}`, { password })
    .then(() => {
      dispatch({ type: userConstants.RESET_PASSWORD });
      dispatch(alertActions.success('Your password has been changed successfully. Login now with your new password!'));
      history.push('/login');
    })
    .catch(() => {
      dispatch({ type: userConstants.RESET_PASSWORD_FAILURE });
      dispatch(alertActions.error('Your token is invalid!'));
    });
};

const getById = id => dispatch => {
  dispatch({ type: userConstants.GET_REQUEST });

  axios.get(`users/${id}`)
    .then(users => dispatch({ type: userConstants.GET_SUCCESS, users: users.data }))
    .catch(error => dispatch({ type: userConstants.GET_FAILURE, error: error.response.data.message }));
};

const getAll = () => dispatch => {
  dispatch({ type: userConstants.GETALL_REQUEST });

  axios.get('user')
    .then(users => dispatch({ type: userConstants.GETALL_SUCCESS, users: users.data }))
    .catch(error => dispatch({ type: userConstants.GETALL_FAILURE, error: error.response.data.message }));
};

const update = user => dispatch => {
  dispatch({ type: userConstants.UPDATE_REQUEST });

  axios.put(`users/${user.id}`, { body: JSON.stringify(user) })
    .then(users => dispatch({ type: userConstants.UPDATE_SUCCESS, users: users.data }))
    .catch(error => dispatch({ type: userConstants.UPDATE_FAILURE, error: error.response.data.message }));
};

const deleteUser = id => dispatch => {
  dispatch({ type: userConstants.DELETE_REQUEST, id });

  axios.delete(`users/${id}`)
    .then(() => dispatch({ type: userConstants.DELETE_SUCCESS, id }))
    .catch(error => dispatch({ type: userConstants.DELETE_FAILURE, id, error: error.response.data.message }));
};

export default {
  resetPasswordByToken,
  delete: deleteUser,
  forgotPassword,
  refreshTokens,
  register,
  getById,
  logout,
  update,
  getAll,
  login
};
