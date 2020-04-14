import React from 'react';
import {mount} from 'enzyme';
import moxios from 'moxios';
import Root from 'Root';
import App from 'components/App';


//Integration test - clicks te fetch comments button and checks comments are returend
it('can fetch a list of comments and display them', () => {

  //Executes before each test
  beforeEach(() => {
    //Installs moxios before each test
    moxios.install();
    //Tricks axios into thinking it got a response - intercepts axios requests for the below URL, then returns a successful code (200) and some dummy data to axios
    moxios.stubRequest('http://jsonplaceholder.typicode.com/comments',{
      status: 200,
      response: [{name: 'Fetched #1'},{name: 'Fetched #2'}]
    });
  });

  //Executes after each test
  afterEach(() => {
    //Unistalls moxios, prevents us unintentally using the settings defined above for other tests
    moxios.install();
  });

  //Renders the App
  const wrapped = mount(
    <Root>
      <App />
    </Root>
  )

  //Clicks fetchComments button (in CommentBox.js)
  wrapped.find('.fetch-comments').simulate('click');

  //Checks if there is a list of 500 comments
  expect(wrapped.find('li').length).toEqual(2);
});
