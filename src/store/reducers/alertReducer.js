import { alertConstants } from '../constants';

export default function alert(state = {}, action) {
  switch (action.type) {
    case alertConstants.SUCCESS:
      return {
        type: 'alert-success',
        message: action.payload
      };

    case alertConstants.ERROR:
      return {
        type: 'alert-danger',
        message: action.payload
      };

    case alertConstants.CLEAR:
      return {};

    default:
      return state;
  }
}
