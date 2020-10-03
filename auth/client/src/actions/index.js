import axios from 'axios';
import {AUTH_USER, AUTH_ERROR} from './types';

//Signup Action Creator - uses Redux Thunk to execute a function inside this AC
export const signup = (formProps, callback) => async dispatch => {
  //Try to sign up the user
  try{
    //Saves the JWT - Sends a post request containing the users email and password to our back end (Node/Express) on local server port 3090 '/signup' route
    const response = await axios.post('http://localhost:3090/signup', formProps);
    //Dispatches an action with the JWT to reducers to be saved in the Redux Store- Dispatches an action with a type of AUTH_USER and a payload containing the response from the async request
    dispatch({type: AUTH_USER, payload: response.data.token});
    //Saves the JWT to localStorage - allows user to refresh and still access the feature component, saves the JWT to 'token' in localStorage
    localStorage.setItem('token', response.data.token);
    //Redirects user to the '/feature' route after they sign up - executes the callback in Signup.js onSubmit handler
    callback();
  //If it fails - Catches an error if try{} fails
  }catch(e){
    //Dispatch an action with an error message that the email is already in use
    dispatch({type: AUTH_ERROR, payload: 'This email is already in use'});
  }
};

//Signout Action Creator - signs out the user
export const signout = () =>{
  //Clears the JWT in the localStorage saved under the 'token' key
  localStorage.removeItem('token');
  //Clears the JWT in the Redux Store - dispatches an action with a blank string which overwrites the JWT in the Redux Store (clears it)
  return{
    type: AUTH_USER,
    payload: ''
  };
};

//Sign in Action Creator - Signs in a user, uses the same logic to the signup Action Creator
export const signin = (formProps, callback) => async dispatch => {
  try{
    const response = await axios.post('http://localhost:3090/signin', formProps);
    dispatch({type: AUTH_USER, payload: response.data.token});
    localStorage.setItem('token', response.data.token);
    callback();
  }catch(e){
    dispatch({type: AUTH_ERROR, payload: 'Invalid username or password'});
  }
};
