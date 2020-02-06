import React from 'react';
import { mount } from 'enzyme';
import CommentBox from 'Components/CommentBox';

//Declares variable as part of the global scope
let wrapped;

//Executes an arrow function before each it statement
beforeEach(() => {
  //Renders CommentBox using the Enzyme mount function - renders the component and all of its children to a fake DOM (uses jsdom library)
  wrapped = mount(<CommentBox />);
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

//Executes test - tests that a user can type a comment and it is reflected on screen
it('has a text area that users can type in', () => {
  //Tricks the component into thinking something has been typed in the comment box - uses Enzyme .simulate function which merges an object (containing the string 'new comment') into the event object in the commentbox on change event handler (handleChange)
  wrapped.find('textarea').simulate('change', {
    target: {value: 'new comment'}
  });
  //Forces component to update - React might not rerender component straight away after setState() is called, this is an issue for the test as the component might not have rerendered but we still check for the value straight after injecting it
  wrapped.update();
  //Checks that a value has been passed into the comment box - find textarea and checks the value prop for the string 'new comment'
  expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
});
