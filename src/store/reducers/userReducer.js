import {
  GET_ALL_REQUEST,
  GET_ALL_SUCCESS,
  GET_ALL_FAILURE,
  DELETE_REQUEST,
  DELETE_SUCCESS,
  DELETE_FAILURE
} from '../constants/userConstant';

export default function users(state = {}, action) {
  switch (action.type) {
    case GET_ALL_REQUEST:
      return {
        loading: true
      };

    case GET_ALL_SUCCESS:
      return {
        users: action.payload
      };

    case GET_ALL_FAILURE:
      return {
        error: action.error
      };

    case DELETE_REQUEST:
      return {
        ...state,
        items: state.items.map(user => user.id === action.payload ? { ...user, deleting: true } : user)
      };

    case DELETE_SUCCESS:
      return {
        items: state.items.filter(user => user.id !== action.payload)
      };

    case DELETE_FAILURE:
      return {
        ...state,
        items: state.items.map(user => {
          if (user.id === action.payload) {
            // make copy of user without 'deleting:true' property
            // const { deleting, ...userCopy } = user;
            const { ...userCopy } = user;

            return { ...userCopy, deleteError: action.error };
          }

          return user;
        })
      };

    default:
      return state;
  }
}
