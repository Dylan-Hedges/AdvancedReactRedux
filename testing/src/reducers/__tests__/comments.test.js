import commentsReducer from 'reducers/comments';
import {SAVE_COMMENT} from 'actions/types';

//Test to check that the SAVE_COMMENT reducer is working
it('handles actions of type SAVE_COMMENT', () => {
  //Creates an action
  const action = {
    type: SAVE_COMMENT,
    payload: 'New Comment'
  }
  //Calls the comments reducer and passes in a blank state & the action created above - reducer will update state and it will be saved in newState
  const newState = commentsReducer([], action);
  //Checks that newState contains the payload 'New Comment'
  expect(newState).toEqual(['New Comment']);
});
