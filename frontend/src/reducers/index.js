import { combineReducers } from 'redux';
import login from './login';

export const REHYDRATE_COMPLETE = 'root/REHYDRATE_COMPLETE';

export default combineReducers({
  login
});
