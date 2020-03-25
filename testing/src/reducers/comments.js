import {SAVE_COMMENT, FETCH_COMMENTS} from 'actions/types';
//Reducer for list of comments
export default function(state = [], action){
  //Looks at the actions type and updates state accordingly
  switch (action.type){
    //Adds new comment to state
    case SAVE_COMMENT:
      //Creates a new array, takes the current state and adds the comment (action.payload)
      return [...state, action.payload];
    //Adds comments dummy data to state
    case FETCH_COMMENTS:
      //Maps over dummy data and extracts name, saves to new array
      const comments = action.payload.data.map(comment => comment.name);
      //Saves new array of names to state - uses spread operator
      return [...state, ...comments]
    default:
      return state;
  }
}
