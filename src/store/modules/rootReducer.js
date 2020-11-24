import { combineReducers } from 'redux';

import auth from './auth/reducer';
import user from './user/reducer';
import fornecedor from './fornecedor/reducer';

export default combineReducers({
  auth,
  user,
  fornecedor,
});
