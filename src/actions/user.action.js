import alertActions from './alert.action';
import { userService } from '../services';
import { userConstants } from '../constants';

const login = ({
  history, email, password, from
}) => dispatch => {
  userService.login(email, password)
    .then(
      user => {
        dispatch({ type: userConstants.LOGIN_SUCCESS, user });
        history.push(from);
      },
      error => {
        dispatch({ type: userConstants.LOGIN_FAILURE, error: error.toString() });
        dispatch(alertActions.error(error.toString()));
      }
    );
};

const logout = history => dispatch => {
  userService.logout()
    .then(() => {
      dispatch({ type: userConstants.LOGOUT });
      history.push('/login');
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
