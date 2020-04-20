import axios from 'axios';
import {SAVE_COMMENT, FETCH_COMMENTS, CHANGE_AUTH} from 'actions/types';

//Action creator - returns user comment
export function saveComment(comment){
  //Returns an action with a payload containing the comment a user made
  return{
    type: SAVE_COMMENT,
    payload: comment
  };
}

//Action Creator - returns dummy comment data
export function fetchComments(){
  //Makes asynchronous request for dummy comments data
  const response = axios.get('http://jsonplaceholder.typicode.com/comments');
  //Returns an action with a payload containing the dummy comments
  return {
    type: FETCH_COMMENTS,
    payload: response
  };
}

export function changeAuth(isLoggedin){
  return{
    type: CHANGE_AUTH,
    payload: isLoggedin
  }
}
