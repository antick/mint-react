import {
  GET_POSTS,
  GET_POSTS_SUCCESS,
  GET_POSTS_FAILURE
} from './types/postType';
import { action } from '../../shared/utilities/actionUtility';

const fetchPosts = () => dispatch => {
  dispatch(action(GET_POSTS));

  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(response => dispatch(action(GET_POSTS_SUCCESS, response)))
    .catch(() => dispatch(action(GET_POSTS_FAILURE)));
};

export default {
  fetchPosts
};
