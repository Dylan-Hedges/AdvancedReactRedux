import axios from 'axios';
import {SAVE_COMMENT, FETCH_COMMENTS} from 'actions/types';

//AC - creates an action with the type of SAVE_COMMENT and the payload as the comment the user made
export function saveComment(comment){
  return{
    type: SAVE_COMMENT,
    payload: comment
  };
}


export function fetchComments(){
  const response = axios.get('http://jsonplaceholder.typicode.com/comments');
  return {
    type: FETCH_COMMENTS,
    payload: response
  };
}
