import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';

//Organises and executes tests - 'it' is a global function (doesnt need to be imported) that takes in a description of the test and a function containing the test
it('shows a comment box', () => {
  //Creates a fake div - exists only in memory (cant see in browser), the app component will render to this div, Jest is run inside the Node CLI but React needs a browser to run, create-react-app comes with JSDOM which creates a fake browser (cant see, only in memory) which tricks React into running so tests can be executed
  const div = document.createElement('div');
  //Renders the App component to the div
  ReactDOM.render(<App />, div);
  //Unmounts/removes the app component - otherwise the component will sit around and take up memory, with alot of tests this can take up alot of memory
  ReactDOM.unmountComponentAtNode(div);
});
