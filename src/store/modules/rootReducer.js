import { combineReducers } from 'redux';

import auth from './auth/reducer';
import user from './user/reducer';
import provider from './provider/reducer';

export default combineReducers({
  auth,
  user,
  provider,
});
