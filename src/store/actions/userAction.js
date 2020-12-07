import axios from 'axios';
import { CLEAR } from '../constants/alertConstant';
import {
  LOGOUT,
  SUBMITTING,
  RESET_PASSWORD,
  RESET_PASSWORD_FAILURE,
  FORGOT_PASSWORD_REQUEST,
  GET_REQUEST,
  GET_SUCCESS,
  GET_FAILURE,
  GET_ALL_REQUEST,
  GET_ALL_SUCCESS,
  GET_ALL_FAILURE,
  UPDATE_REQUEST,
  UPDATE_SUCCESS,
  UPDATE_FAILURE,
  DELETE_REQUEST,
  DELETE_SUCCESS,
  DELETE_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  TOKEN_REFRESHED,
  TOKEN_REMOVED,
  LOGIN_SUCCESS,
  LOGIN_FAILURE, LOGIN_REQUEST
} from '../constants/userConstant';
import alertAction from './alertAction';
import { auth, action } from '../../utilities';

const refreshTokens = () => dispatch => {
  const refreshToken = auth.getRefreshToken();

  if (refreshToken) {
    axios.post('auth/refresh-tokens', { refreshToken })
      .then(response => {
        if (response.data.access) {
          auth.setAccessToken(response.data.access);
          auth.setRefreshToken(response.data.refresh);

          dispatch(action(TOKEN_REFRESHED));
        }
      })
      .catch(error => {
        auth.removeAllTokens();

        dispatch(action(TOKEN_REMOVED, null, error.response.data.message));
      });
  }
};

const login = ({
  history, email, password, from
}) => dispatch => {
  dispatch(action(LOGIN_REQUEST));

  axios.post('auth/login', { email, password })
    .then(response => {
      auth.setAccessToken(response.data.tokens.access);
      auth.setRefreshToken(response.data.tokens.refresh);

      dispatch(action(LOGIN_SUCCESS, response));

      history.push(from);
    })
    .catch(error => {
      dispatch(action(LOGIN_FAILURE, null, error.response.data.message));
      dispatch(alertAction.error(error.response.data.message));
    });
};

const logout = history => dispatch => {
  dispatch(action(CLEAR));

  const refreshToken = auth.getRefreshToken();

  if (refreshToken) {
    axios.delete(`user/logout/${refreshToken}`)
      .then(() => {
        dispatch(action(LOGOUT));

        auth.removeAllTokens();

        if (history) {
          history.push('/login');
        }
      })
      .catch(() => {
        dispatch(action(LOGOUT));

        auth.removeAllTokens();
      });
  }
};

const register = (history, user) => dispatch => {
  dispatch(action(REGISTER_REQUEST));

  axios.post('auth/register', user)
    .then(() => {
      dispatch(action(REGISTER_SUCCESS));
      dispatch(alertAction.success('Registration successful! Please login now.'));
      history.push('/login');
    })
    .catch(error => {
      dispatch(action(REGISTER_FAILURE, null, error.response.data.message));
      dispatch(alertAction.error(error.response.data.message));
    });
};

const forgotPassword = email => dispatch => {
  dispatch(action(SUBMITTING));
  dispatch(action(CLEAR));

  axios.post('auth/forgot-password', { email })
    .then(() => {
      dispatch(action(FORGOT_PASSWORD_REQUEST));
      dispatch(alertAction.success('You will receive an email shortly to reset your password!'));
    });
};

const resetPasswordByToken = (history, token, password) => dispatch => {
  dispatch(action(SUBMITTING));
  dispatch(action(CLEAR));

  axios.post(`auth/reset-password?token=${token}`, { password })
    .then(() => {
      dispatch(action(RESET_PASSWORD));
      dispatch(alertAction.success('Your password has been changed successfully. Login now with your new password!'));
      history.push('/login');
    })
    .catch(() => {
      dispatch(action(RESET_PASSWORD_FAILURE));
      dispatch(alertAction.error('Your token is invalid!'));
    });
};

const getById = id => dispatch => {
  dispatch(action(GET_REQUEST));

  axios.get(`users/${id}`)
    .then(users => dispatch(action(GET_SUCCESS, users.data)))
    .catch(error => dispatch(action(GET_FAILURE, null, error.response.data.message)));
};

const getAll = () => dispatch => {
  dispatch(action(GET_ALL_REQUEST));

  axios.get('user')
    .then(users => dispatch(action(GET_ALL_SUCCESS, users.data)))
    .catch(error => dispatch(action(GET_ALL_FAILURE, null, error.response.data.message)));
};

const update = user => dispatch => {
  dispatch(action(UPDATE_REQUEST));

  axios.put(`users/${user.id}`, { body: JSON.stringify(user) })
    .then(users => dispatch(action(UPDATE_SUCCESS, users.data)))
    .catch(error => dispatch(action(UPDATE_FAILURE, null, error.response.data.message)));
};

const deleteUser = id => dispatch => {
  dispatch(action(DELETE_REQUEST, id));

  axios.delete(`users/${id}`)
    .then(() => dispatch(action(DELETE_SUCCESS, id)))
    .catch(error => dispatch(action(DELETE_FAILURE, id, error.response.data.message)));
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
