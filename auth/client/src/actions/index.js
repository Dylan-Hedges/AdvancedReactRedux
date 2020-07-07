import axios from 'axios';
import {AUTH_USER} from './types';

//Signup Action Creator - uses Redux Thunk to execute a function inside this AC
export const signup = formProps => dispatch => {
  //Sends a post request containing the users email and password to our back end (Node/Express) on local server port 3090 '/signup' route
  axios.post('http://localhost:3090/signup', formProps);
};
