import { postsConstants } from '../constants';

export const initialState = {
  posts: [],
  loading: false,
  hasErrors: false
};

export default function postsReducer(state = initialState, action) {
  switch (action.type) {
    case postsConstants.GET_POSTS:
      return {
        ...state,
        loading: true
      };

    case postsConstants.GET_POSTS_SUCCESS:
      return {
        posts: action.payload,
        loading: false,
        hasErrors: false
      };

    case postsConstants.GET_POSTS_FAILURE:
      return {
        ...state,
        loading: false,
        hasErrors: true
      };

    default:
      return state;
  }
}
