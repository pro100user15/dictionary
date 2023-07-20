import { combineReducers } from 'redux';
import { authReducer } from './auth';
import { jwtReducer } from './jwt';
import { userReducer } from './user';
import { themeReducer } from './theme';

export const rootReducer = combineReducers({
  auth: authReducer,
  jwt: jwtReducer,
  user: userReducer,
  theme: themeReducer
});
