import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import authentication from '../modules/auth/reducers/authenticationReducer';
import password from '../modules/auth/reducers/passwordReducer';
import registration from '../modules/auth/reducers/registrationReducer';
import posts from '../modules/user/reducers/postReducer';
import users from '../modules/user/reducers/userReducer';
import alert from '../modules/shared/reducers/alertReducer';

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
