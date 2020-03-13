import React from 'react';
import {mount} from 'enzyme';
import CommentList from 'components/CommentList';
import Root from 'Root';

//Stores mounted component to be used in testing
let wrapped;

//Executes before each test
beforeEach(() => {
  //Mounts component to enzyme DOM and connects it to the redux store - <Root> wraps component in Provider tag
  wrapped = mount(
    <Root>
      <CommentList />
    </Root>
  );
});

//Executes a test
it('creates one LI per comment', () => {

});
