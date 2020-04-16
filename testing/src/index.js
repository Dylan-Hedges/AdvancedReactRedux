import React from 'react';
import ReactDOM from 'react-dom'
import {BrowserRouter, Route} from 'react-router-dom';
import Root from 'Root';
import App from 'Components/App';

//Renders the app to the DOM element with an id of root in the index.html file; Root creates the Redux Store and connects the <App> component to it using the Provider tag - Root can be reused for any component to connect it to the Redux Store;
ReactDOM.render(
  <Root>
    <BrowserRouter>
      <Route path="/" component={App} />
    </BrowserRouter>
  </Root>
  ,
  document.querySelector('#root'));
