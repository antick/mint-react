import { userConstants } from '../constants';

export default function users(state = {}, action) {
  switch (action.type) {
    case userConstants.GET_ALL_REQUEST:
      return {
        loading: true
      };

    case userConstants.GET_ALL_SUCCESS:
      return {
        users: action.users
      };

    case userConstants.GET_ALL_FAILURE:
      return {
        error: action.error
      };

    case userConstants.DELETE_REQUEST:
      return {
        ...state,
        items: state.items.map(user => user.id === action.id ? { ...user, deleting: true } : user)
      };

    case userConstants.DELETE_SUCCESS:
      return {
        items: state.items.filter(user => user.id !== action.id)
      };

    case userConstants.DELETE_FAILURE:
      return {
        ...state,
        items: state.items.map(user => {
          if (user.id === action.id) {
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
