import { userService } from '../services';
import alertActions from './alert.action';
import history from '../utils/history';
import { userConstants } from '../constants';

const login = (email, password, from) => dispatch => {
  userService.login(email, password)
    .then(
      user => {
        dispatch({ type: userConstants.LOGIN_SUCCESS, user });
        history.push(from);

        // TODO: Hard redirection because the App component is not re-rendering after dispatching the LOGIN SUCCESS
        window.location.assign('/');
      },
      error => {
        dispatch({ type: userConstants.LOGIN_FAILURE, error: error.toString() });
        dispatch(alertActions.error(error.toString()));
      }
    );
};

const logout = async () => {
  try {
    await userService.logout();
  } catch (e) {
    // Log the error here
  }

  // TODO: Hard redirection due to issues in component re-rendering. Need to find a solution for this.
  window.location.assign('/login');

  return {
    type: userConstants.LOGOUT
  };
};

const register = user => dispatch => {
  dispatch({ type: userConstants.REGISTER_REQUEST, user });

  userService.register(user)
    .then(
      userData => {
        dispatch({ type: userConstants.REGISTER_SUCCESS, user: userData });
        history.push('/login');
        dispatch(alertActions.success('Registration successful'));
      },
      error => {
        dispatch({ type: userConstants.REGISTER_FAILURE, error: error.toString() });
        dispatch(alertActions.error(error.toString()));
      }
    );
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
  delete: deleteUser,
  register,
  logout,
  getAll,
  login
};
