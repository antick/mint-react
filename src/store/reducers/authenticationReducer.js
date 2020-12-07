import { userConstants } from '../constants';
import { auth } from '../../utilities';

const user = auth.getAccessToken();
const initialState = user ? { loggedIn: true, user } : {};

export default function authentication(state = initialState, action) {
  switch (action.type) {
    case userConstants.LOGIN_SUCCESS:
      return {
        loggedIn: true,
        user: action.payload
      };

    case userConstants.LOGIN_FAILURE:
      return {};

    case userConstants.LOGOUT:
      return {
        loggedIn: false
      };

    default:
      return state;
  }
}