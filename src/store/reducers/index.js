import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import authentication from './authenticationReducer';
import password from './passwordReducer';
import registration from './registrationReducer';
import posts from './postReducer';
import users from './userReducer';
import alert from './alertReducer';

const rootReducer = history => combineReducers({
  router: connectRouter(history),
  authentication,
  registration,
  password,
  posts,
  users,
  alert
});

export default rootReducer;
