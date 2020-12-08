import {
  SUBMITTING,
  FORGOT_PASSWORD_REQUEST,
  RESET_PASSWORD_FAILURE
} from '../../user/actions/types/userType';

const initialState = {
  submitting: false
};

export default function password(state = initialState, action) {
  switch (action.type) {
    case SUBMITTING:
      return {
        ...state,
        submitting: true
      };

    case FORGOT_PASSWORD_REQUEST:
      return {
        ...state,
        submitting: false
      };

    case RESET_PASSWORD_FAILURE:
      return {
        ...state,
        submitting: false
      };

    default:
      return state;
  }
}
