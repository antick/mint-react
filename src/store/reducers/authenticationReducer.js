import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT
} from '../constants/userConstant';
import { auth } from '../../utilities';

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
