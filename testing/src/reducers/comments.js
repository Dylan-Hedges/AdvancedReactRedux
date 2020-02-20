import {SAVE_COMMENT} from 'actions/types';
//Reducer for list of comments
export default function(state = [], action){
  //Looks at the actions type and updates state accordingly
  switch (action.type){
    //Adds new comment to state - creates a new array, takes the current state and adds the comment (action.payload)
    case SAVE_COMMENT:
      return [...state, action.payload];
    default:
      return state;
  }
}
