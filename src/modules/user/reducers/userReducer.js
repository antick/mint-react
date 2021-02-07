import {
  GET_REQUEST, GET_SUCCESS,
  GET_ALL_REQUEST, GET_ALL_SUCCESS, GET_ALL_FAILURE,
  DELETE_REQUEST, DELETE_SUCCESS, DELETE_FAILURE,
  UPDATE_PROFILE_REQUEST, UPDATE_PROFILE_SUCCESS, UPDATE_PROFILE_FAILURE
} from '../actions/types/userType';

const initialState = {
  submitting: false,
  loading: false,
  profile: {
    name: '',
    email: '',
    password: ''
  }
};

export default function users(state = initialState, action) {
  switch (action.type) {
    case GET_REQUEST:
      return {
        ...state
      };

    case GET_SUCCESS:
      return {
        ...state,
        profile: action.payload
      };

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
        submitting: false,
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

    case UPDATE_PROFILE_REQUEST:
      return {
        ...state,
        submitting: true
      };

    case UPDATE_PROFILE_SUCCESS:
      return {
        ...state,
        submitting: false
      };

    case UPDATE_PROFILE_FAILURE:
      return {
        ...state,
        submitting: false
      };

    default:
      return state;
  }
}
