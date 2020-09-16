import { userConstants } from '../constants';

const user = localStorage.getItem('token');
const initialState = user ? { loggedIn: true, user } : {};

export default function authentication(state = initialState, action) {
  switch (action.type) {
    case userConstants.LOGIN_SUCCESS:
      return {
        loggedIn: true,
        user: action.user
      };

    case userConstants.LOGIN_FAILURE:
      return {};

    case userConstants.LOGOUT:
      return {};

    default:
      return state;
  }
}
