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

//Tests that an <li> is created for each comment
it('creates one LI per comment', () => {
  expect(wrapped.find('li').length).toEqual(2);
});

//Tests that the comments contain specific text
it('shows the text for each comment', () => {
  expect(wrapped.render().text()).toContain('Comment 1');
  expect(wrapped.render().text()).toContain('Comment 2');
});
