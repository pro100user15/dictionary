import { combineReducers } from 'redux';
import { authReducer } from './auth';
import { jwtReducer } from './jwt';
import { userReducer } from './user';

export const rootReducer = combineReducers({
  auth: authReducer,
  jwt: jwtReducer,
  user: userReducer
});
