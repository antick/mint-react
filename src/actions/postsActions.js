export const USER_LOGGED_IN = 'USER_LOGGED_IN';
export const USER_LOGGED_OUT = 'USER_LOGGED_OUT';
export const GET_POSTS = 'GET_POSTS';
export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS';
export const GET_POSTS_FAILURE = 'GET_POSTS_FAILURE';

const getPosts = () => ({
  type: GET_POSTS
});

const getPostsSuccess = posts => ({
  type: GET_POSTS_SUCCESS,
  payload: posts
});

const getPostsFailure = () => ({
  type: GET_POSTS_FAILURE
});

export function fetchPosts() {
  return async dispatch => {
    dispatch(getPosts());

    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json();

      dispatch(getPostsSuccess(data));
    } catch (error) {
      dispatch(getPostsFailure());
    }
  };
}
