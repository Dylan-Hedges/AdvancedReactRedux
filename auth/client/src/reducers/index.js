import {combineReducers} from 'redux';
import auth from './auth';

//Combines all reducers
export default combineReducers({
  auth: auth
});
