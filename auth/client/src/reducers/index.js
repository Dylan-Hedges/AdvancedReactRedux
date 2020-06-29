//Imports the combine reducers call
import {combineReducers} from 'redux';
//Imports the Redux Form reducer used to capture form data
import {reducer as formReducer} from 'redux-form';
//Imports the auth reducer
import auth from './auth';

//Combines all reducers
export default combineReducers({
  auth: auth,
  form: formReducer
});
