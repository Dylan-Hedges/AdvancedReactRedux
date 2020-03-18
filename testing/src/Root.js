import React from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from 'reducers';

//Reuseable component that makes the Redux Store available to a component - destructures children and initialState from props; sets inital state to a blank object or whatever is passed in using the initialState prop
export default ({ children, initialState = {} }) => {
  //Creates the Redux Store and wraps it in the App component - passes in reducers and inital state; {children} references the <App> component but can be swapped out for any component on the fly;
  return(
    <Provider store={createStore(reducers, initialState)}>
      {children}
    </Provider>
  );
};
