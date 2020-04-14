import React from 'react';
import {mount} from 'enzyme';
import moxios from 'moxios';
import Root from 'Root';
import App from 'components/App';


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
  moxios.uninstall();
});

//Integration test - clicks te fetch comments button and checks comments are returend
it('can fetch a list of comments and display them', (done) => {
  //Renders the App
  const wrapped = mount(
    <Root>
      <App />
    </Root>
  );
  //Test - Clicks fetchComments button (in CommentBox.js)
  wrapped.find('.fetch-comments').simulate('click');
  //Waits for the fetch comments axios request to complete before the executing test - as the axios fetch comments request is asynchronous there needs to be a pause while the request completes, moxios.wait() allows the request to complete before executing the test
  moxios.wait(() => {
    //Updates component with the list of comments - after fetchComments button is clicked and the request is complete the component needs to update with the list of comments
    wrapped.update();
    //Test - Checks if there is a list of comments
    expect(wrapped.find('li').length).toEqual(2);
    //Manually tells Jest the test is done - even with the axios.wait() pause the test can still fail as Jest runs through tests quickly and does not take into consideration delayed events well, using done() means Jest will wait and not mark the test as complete until done() is called, this gives the time needed for the request to complete
    done();
    //Unmounts component - clean up, removes component
    wrapped.unmount();
  });
});
