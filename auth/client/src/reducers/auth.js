//Imports the auth user action tyoe
import {AUTH_USER} from '../actions/types';
//Sets the inital state for auth reducer
const INITAL_STATE={
  authenticated: '',
  errorMessage: ''
};

//Exports auth reducer
export default function(state = INITAL_STATE, action){
  //Switch statement determines what code to execute based on action type
  switch(action.type){
    //If the action type is AUTH_USER
    case AUTH_USER:
      //Add the users JWT to the Redux Store - returns all the properties of the state object + the JWT under the authenticated K/V pair
      return{...state, authenticated: action.payload};
    default:
      return state;
  }
}
