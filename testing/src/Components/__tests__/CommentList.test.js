import React from 'react';
import {mount} from 'enzyme';
import CommentList from 'components/CommentList';
import Root from 'Root';

//Stores mounted component to be used in testing
let wrapped;

//Executes before each test
beforeEach(() => {
  //Creates an initialState (dummy data) so that tests for CommentList can be performed
  const initialState = {
    comments: ['Comment 1', 'Comment 2']
  };
  //Mounts component to enzyme DOM and connects it to the redux store - <Root> wraps component in Provider tag; passes in the initialState which contains dummy data
  wrapped = mount(
    <Root initialState={initialState}>
      <CommentList />
    </Root>
  );
});

//Executes a test
it('creates one LI per comment', () => {
  console.log(wrapped.find('li').length);
});
