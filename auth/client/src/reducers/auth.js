//Imports the auth user action tyoe
import {AUTH_USER, AUTH_ERROR} from '../actions/types';
//Sets the inital state for auth reducer
const INITAL_STATE={
  authenticated: '',
  errorMessage: ''
};

//Exports auth reducer - updates Redux Store state with payloads from incoming actions
export default function(state = INITAL_STATE, action){
  //Switch statement determines that determines which code is executed based on the type of the incoming action creator
  switch(action.type){
    //If the incoming action has a type of AUTH_USER
    case AUTH_USER:
      //Add the users JWT to the Redux Store - returns all the properties of the state object + the JWT under the authenticated K/V pair
      return{...state, authenticated: action.payload};
    //If the incoming action has a type of AUTH_ERROR
    case AUTH_ERROR:
      //Add the error message to the state under the errorMessage key
      return{...state, errorMessage: action.payload}
    default:
      return state;
  }
}
