import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import postsReducer from './postsReducer';
import authentication from './authentication.reducer';
import registration from './registration.reducer';
import users from './users.reducer';
import alert from './alert.reducer';

const rootReducer = history => combineReducers({
  router: connectRouter(history),
  posts: postsReducer,
  authentication,
  registration,
  users,
  alert
});

export default rootReducer;
