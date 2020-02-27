import React from 'react';
import { mount } from 'enzyme';
import CommentBox from 'Components/CommentBox';
import Root from 'Root';

//Declares variable as part of the global scope
let wrapped;

//Executes an arrow function before each it statement
beforeEach(() => {
  wrapped = mount(
  <Root>
    //Renders CommentBox using the Enzyme mount function - renders the component and all of its children to a fake DOM (uses jsdom library)
    <CommentBox />
  </Root>
  );
});

//Executes an arrow function after each it statement
afterEach(() => {
  //Removes (unmounts) the component from the fake DOM - clean up, prevents component interfering with components in other tests
  wrapped.unmount();
});

//Executes test - find textarea & find button
it('has a text area and a button', () => {
  //Checks to see if a textarea exists in the wrapped CommentBox component
  expect(wrapped.find('textarea').length).toEqual(1);
  //Checks to see if a button exists in the wrapped CommentBox component
  expect(wrapped.find('button').length).toEqual(1);
});

//Groups tests together - a function that groups together sets of tests that have a common set up or tear down
describe('the text area', () => {
  //Performs set up before each test is run - beforeEach is run only for the tests in the describe code block
  beforeEach(() => {
    //Tricks the component into thinking something has been typed in the comment box - uses Enzyme .simulate function which merges an object (containing the string 'new comment') into the event object in the commentbox on change event handler (handleChange)
    wrapped.find('textarea').simulate('change', {
      target: {value: 'new comment'}
    });
    //Forces component to update - React might not rerender component straight away after setState() is called, this is an issue for the test as the component might not have rerendered but we still check for the value straight after injecting it
    wrapped.update();
  });
  //Executes test - tests that a user can type a comment and it is reflected on screen
  it('has a text area that users can type in', () => {
    //Checks that a value has been passed into the comment box - find textarea and checks the value prop for the string 'new comment'
    expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
  });
  //Executes test - tests that the comment box (textarea) gets cleared out when the form is submitted
  it('textarea is cleared on form submit', () => {
    //Submits the form
    wrapped.find('form').simulate('submit');
    //Updates component - value in textarea is submitted, rerenders component to display new value in text area (blank)
    wrapped.update();
    //Checks if the commment box is empty - checks textarea is an empty string, checks textarea is equal to an empty string
    expect(wrapped.find('textarea').prop('value')).toEqual('');
  });
});
