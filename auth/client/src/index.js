import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';

import App from './components/App';
import Welcome from './components/Welcome';
import Signup from './components/auth/Signup';

//Renders the App.js file to the DOM - <BrowserRouter> provides react-router <Link> functionality; <Route /> allows a component to be displayed inside another component on a specific route
ReactDOM.render(
  <BrowserRouter>
      <App>
        <Route path="/" exact component={Welcome} />
        <Route path="/signup" exact component={Signup} />
      </App>
  </BrowserRouter>,
  document.querySelector('#root')
);
