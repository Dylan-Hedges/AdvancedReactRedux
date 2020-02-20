import {SAVE_COMMENT} from 'actions/types';

//AC - creates an action with the type of SAVE_COMMENT and the payload as the comment the user made
export function saveComment(comment){
  return{
    type: SAVE_COMMENT,
    payload: comment
  }
}
