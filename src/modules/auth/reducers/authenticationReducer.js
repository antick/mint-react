import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT
} from '../../user/actions/types/userType';
import auth from '../utilities/authUtility';

const user = auth.getAccessToken();
const initialState = user ? { loggedIn: true, user } : {};

export default function authentication(state = initialState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        loggedIn: true,
        user: action.payload
      };

    case LOGIN_FAILURE:
      return {};

    case LOGOUT:
      return {
        loggedIn: false
      };

    default:
      return state;
  }
}
