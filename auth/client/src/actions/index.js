import axios from 'axios';
import {AUTH_USER} from './types';

//Signup Action Creator - uses Redux Thunk to execute a function inside this AC
export const signup = formProps => async dispatch => {
  //Saves the JWT - Sends a post request containing the users email and password to our back end (Node/Express) on local server port 3090 '/signup' route
  const response = await axios.post('http://localhost:3090/signup', formProps);
  //Dispatches an action with the JWT to reducers to be saved in the Redux Store- Dispatches an action with a type of AUTH_USER and a payload containing the response from the async request
  dispatch({type: AUTH_USER, payload: response.data.token});
};
