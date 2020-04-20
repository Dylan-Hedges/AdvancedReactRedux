import {combineReducers} from 'redux';
import commentsReducer from 'reducers/comments';
import authReducer from 'reducers/auth';

//Combines reducers into a single object used to update the Redux State
export default combineReducers({
  comments: commentsReducer,
  auth: authReducer
});
