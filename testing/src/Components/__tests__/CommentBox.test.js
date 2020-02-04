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
