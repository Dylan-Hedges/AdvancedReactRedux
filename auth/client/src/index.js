import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reduxThunk from 'redux-thunk';

import App from './components/App';
import Welcome from './components/Welcome';
import Signup from './components/auth/Signup';
import reducers from './reducers';

//Creates the Redux Store - passes in reducers, inital state (blank object) and applyMiddleware(reduxThunk) which wires up Redux Thunk to our app (allows functions to be executed in action creators)
const store = createStore(
  reducers,
  {},
  applyMiddleware(reduxThunk)
);

//Renders the App.js file to the DOM - <BrowserRouter> provides react-router <Link> functionality; <Route /> allows a component to be displayed inside another component on a specific route; <Provider store={store} /> makes the Redux Store accessible in our <App>
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
        <App>
          <Route path="/" exact component={Welcome} />
          <Route path="/signup" exact component={Signup} />
        </App>
    </BrowserRouter>
  </Provider>,
  document.querySelector('#root')
);
