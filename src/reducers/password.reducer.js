import { userConstants } from '../constants';

const initialState = {
  submitting: false
};

export default function password(state = initialState, action) {
  switch (action.type) {
    case userConstants.SUBMITTING:
      return {
        ...state,
        submitting: true
      };

    case userConstants.FORGOT_PASSWORD_REQUEST:
      return {
        ...state,
        submitting: false
      };

    case userConstants.RESET_PASSWORD_FAILURE:
      return {
        ...state,
        submitting: false
      };

    default:
      return state;
  }
}
