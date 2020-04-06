import React from 'react';
import {mount} from 'enzyme';
import Root from 'Root';
import App from 'components/App';

//Integration test - clicks te fetch comments button and checks comments are returend
it('can fetch a list of comments and display them', () => {

  //Renders the App
  const wrapped = mount(
    <Root>
      <App />
    </Root>
  )

  //Clicks fetchComments button (in CommentBox.js)
  wrapped.find('.fetch-comments').simulate('click');

  //Checks if there is a list of 500 comments
  expect(wrapped.find('li').length).toEqual(500);
});
