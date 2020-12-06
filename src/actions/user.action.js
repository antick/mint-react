import alertActions from './alert.action';
import { userService } from '../services';
import { alertConstants, userConstants } from '../constants';

const login = ({
  history, email, password, from
}) => dispatch => {
  userService.login(email, password)
    .then(user => {
      dispatch({ type: userConstants.LOGIN_SUCCESS, user });
      history.push(from);
    })
    .catch(error => {
      dispatch({ type: userConstants.LOGIN_FAILURE, error: error.response.data.message });
      dispatch(alertActions.error(error.response.data.message));
    });
};

const logout = history => dispatch => {
  dispatch({ type: alertConstants.CLEAR });

  userService.logout()
    .then(() => {
      dispatch({ type: userConstants.LOGOUT });

      if (history) {
        history.push('/login');
      }
    })
    .catch();
};

const register = (history, user) => dispatch => {
  dispatch({ type: userConstants.REGISTER_REQUEST, user });

  userService.register(user)
    .then(userData => {
      dispatch({ type: userConstants.REGISTER_SUCCESS, user: userData });
      dispatch(alertActions.success('Registration successful! Please log in now.'));
      history.push('/login');
    })
    .catch(error => {
      dispatch({ type: userConstants.REGISTER_FAILURE, error: error.response.data.message });
      dispatch(alertActions.error(error.response.data.message));
    });
};

const forgotPassword = email => dispatch => {
  dispatch({ type: userConstants.FORGOT_PASSWORD_SUBMITTING });
  dispatch({ type: alertConstants.CLEAR });

  userService.forgotPassword(email)
    .then(() => {
      dispatch({ type: userConstants.FORGOT_PASSWORD_REQUEST });
      dispatch(alertActions.success('You will receive an email to reset your password shortly!'));
    });
};

const resetPasswordByToken = (history, token, password) => dispatch => {
  dispatch({ type: userConstants.FORGOT_PASSWORD_SUBMITTING });
  dispatch({ type: alertConstants.CLEAR });

  userService.resetPasswordByToken(token, password)
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

const getAll = () => dispatch => {
  dispatch({ type: userConstants.GETALL_REQUEST });

  userService.getAll()
    .then(
      users => dispatch({ type: userConstants.GETALL_SUCCESS, users }),
      error => dispatch({ type: userConstants.GETALL_FAILURE, error: error.toString() })
    );
};

const deleteUser = id => dispatch => {
  dispatch({ type: userConstants.DELETE_REQUEST, id });

  userService.delete(id)
    .then(
      () => dispatch({ type: userConstants.DELETE_SUCCESS, id }),
      error => dispatch({ type: userConstants.DELETE_FAILURE, id, error: error.toString() })
    );
};

export default {
  resetPasswordByToken,
  delete: deleteUser,
  forgotPassword,
  register,
  logout,
  getAll,
  login
};
