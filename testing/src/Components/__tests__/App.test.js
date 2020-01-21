import React from 'react';
import {shallow} from 'enzyme';
import App from '../App';
import CommentBox from 'Components/CommentBox';
import CommentList from 'Components/CommentList';

//Declares the variable to store shallow(<App />) - its declared here because of scoping, if it is declared inside the beforeEach() our it tests would be out of scope and wouldnt be able to access it
let wrapped;

//Performs basic set up before each test - executes the function once before each test
beforeEach(() => {
  //Renders App using the Enzyme shallow function - renders the React component but not its childeren (doesnt include vanilla JS)
  wrapped = shallow(<App />);
});

//Checks that a Comment Box exists
it('shows a comment box', () => {
  //Checks to see if the CommentBox component exists in the wrapped App component - .find(CommentBox) returns an array containing each instance of the CommentBox component that is found in App component, .length() returns the length of the array e.g 0 (none found) or 1 (1 found), .toEqual(1) looks at the array length and checks if it equals 1 (i.e. 1 CommentBox component found)
  expect(wrapped.find(CommentBox).length).toEqual(1);
});


//Checks that a Comment List exists
it('shows a comment list', ()=> {
  expect(wrapped.find(CommentList).length).toEqual(1);
});


//--------Manual testing not using Enzyme--------
// import ReactDOM from 'react-dom';
//Organises and executes tests - 'it' is a global function (doesnt need to be imported) that takes in a description of the test and a function containing the test
// it('shows a comment box', () => {
//   //Creates a fake div - exists only in memory (cant see in browser), the app component will render to this div, Jest is run inside the Node CLI but React needs a browser to run, create-react-app comes with JSDOM which creates a fake browser (cant see, only in memory) which tricks React into running so tests can be executed
//   const div = document.createElement('div');
//   //Renders the App component to the div
//   ReactDOM.render(<App />, div);
//   //expect() short for expectation, inside of the function we put what we are trying to test; .toContain this is the matcher and specifies how we want to conduct the test;('Comment Box') expected value we expect to see, not all matchers require values, e.g toBeTruthy()
//   expect(div.innerHTML).toContain('Comment Box');
//   //Unmounts/removes the app component - otherwise the component will sit around and take up memory, with alot of tests this can take up alot of memory
//   ReactDOM.unmountComponentAtNode(div);
// });
