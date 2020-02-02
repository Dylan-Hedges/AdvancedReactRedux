import React from 'react';
import { mount } from 'enzyme';
import CommentBox from 'Components/CommentBox';

it('has a text area and a button', () => {
  //Renders CommentBox using the Enzyme mount function - renders the component and all of its children to a fake DOM (uses jsdom library)
  const wrapped = mount(<CommentBox />);
  //Checks to see if a textarea exists in the wrapped CommentBox component
  expect(wrapped.find('textarea').length).toEqual(1);
  //Checks to see if a button exists in the wrapped CommentBox component
  expect(wrapped.find('button').length).toEqual(1);
});
