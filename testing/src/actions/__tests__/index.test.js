import { saveComment } from 'actions';
import { SAVE_COMMENT } from 'actions/types';

//Test for SAVE_COMMENT action creator
describe('saveComment', () => {
  //Checks that the type is SAVE_COMMENT
  it('has the correct type', ()=> {
    const action = saveComment();
    expect(action.type).toEqual(SAVE_COMMENT);
  });
  //Checks the payload is 'New Comment'
  it('has the correct payload', () => {
    const action = saveComment('New Comment');
    expect(action.payload).toEqual('New Comment');
  });
});
