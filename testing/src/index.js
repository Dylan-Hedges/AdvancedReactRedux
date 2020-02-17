import React from 'react';
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from 'reducers';

import App from 'Components/App';

//Renders the app to the DOM element with an id of root in the index.html file
ReactDOM.render(
  //Creates the Redux Store and wrapps it in the App component - passes in reducers and sets inital state to a blank object
  <Provider store={createStore(reducers, {})}>
    <App />
  </Provider>
  ,
  document.querySelector('#root'));
