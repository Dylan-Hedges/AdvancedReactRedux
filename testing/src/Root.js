import React from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from 'reducers';

//Reuseable component that makes the Redux Store available to a component
export default (props) => {
  //Creates the Redux Store and wrapps it in the App component - passes in reducers and sets inital state to a blank object; {props.children} references the <App> component but can be swapped out for any component on the fly;
  return(
    <Provider store={createStore(reducers, {})}>
      {props.children}
    </Provider>
  );
};
