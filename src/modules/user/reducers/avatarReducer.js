import { SET_AVATAR, CLEAR_AVATAR } from '../actions/types/avatarType';

const initialState = {
  avatar: false
};

export default function avatarReducer(state = initialState, action) {
  switch (action.type) {
    case SET_AVATAR:
      return {
        ...state,
        avatar: action.payload
      };

    case CLEAR_AVATAR:
      return {
        ...state,
        avatar: false
      };

    default:
      return state;
  }
}
