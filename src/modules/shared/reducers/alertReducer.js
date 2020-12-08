import {
  SUCCESS,
  ERROR,
  CLEAR
} from '../actions/types/alertType';

export default function alert(state = {}, action) {
  switch (action.type) {
    case SUCCESS:
      return {
        type: 'alert-success',
        message: action.payload
      };

    case ERROR:
      return {
        type: 'alert-danger',
        message: action.payload
      };

    case CLEAR:
      return {};

    default:
      return state;
  }
}
