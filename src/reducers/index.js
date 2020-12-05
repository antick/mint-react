import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import authentication from './authentication.reducer';
import registration from './registration.reducer';
import posts from './posts.reducer';
import users from './users.reducer';
import alert from './alert.reducer';

const rootReducer = history => combineReducers({
  router: connectRouter(history),
  authentication,
  registration,
  posts,
  users,
  alert
});

export default rootReducer;
