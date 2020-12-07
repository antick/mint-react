import { postsConstants } from '../constants';

const fetchPosts = () => dispatch => {
  dispatch({ type: postsConstants.GET_POSTS });

  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(response => dispatch({ type: postsConstants.GET_POSTS_SUCCESS, payload: response }))
    .catch(() => dispatch({ type: postsConstants.GET_POSTS_FAILURE }));
};

export default {
  fetchPosts
};
