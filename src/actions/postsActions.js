export const GET_POSTS = 'GET_POSTS';
export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS';
export const GET_POSTS_FAILURE = 'GET_POSTS_FAILURE';

export function fetchPosts() {
  return async dispatch => {
    dispatch({ type: GET_POSTS });

    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json();

      dispatch({ type: GET_POSTS_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: GET_POSTS_FAILURE });
    }
  };
}
