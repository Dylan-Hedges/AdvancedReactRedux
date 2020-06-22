import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {BrowserRouter} from 'react-router-dom';

//Renders the App.js file to the DOM - <BrowserRouter> provides react-router <Link> functionality
ReactDOM.render(
  <BrowserRouter>
      <App />
  </BrowserRouter>,
  document.querySelector('#root')
);
