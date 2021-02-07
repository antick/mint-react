import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import authenticationReducer from '../modules/auth/reducers/authenticationReducer';
import passwordReducer from '../modules/auth/reducers/passwordReducer';
import registrationReducer from '../modules/auth/reducers/registrationReducer';
import postReducer from '../modules/user/reducers/postReducer';
import userReducer from '../modules/user/reducers/userReducer';
import avatarReducer from '../modules/user/reducers/avatarReducer';
import alertReducer from '../modules/shared/reducers/alertReducer';

const rootReducer = history => combineReducers({
  router: connectRouter(history),
  authenticationReducer,
  registrationReducer,
  passwordReducer,
  avatarReducer,
  alertReducer,
  postReducer,
  userReducer
});

export default rootReducer;
