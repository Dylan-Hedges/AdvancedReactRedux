import React from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reduxPromise from 'redux-promise';
import reducers from 'reducers';

//Reuseable component that makes the Redux Store available to a component - destructures children and initialState from props; sets inital state to a blank object or whatever is passed in using the initialState prop
export default ({ children, initialState = {} }) => {
  //Creates the Redux Store - takes in the reducers, an inital state and middleware
  const store = createStore(reducers, initialState, applyMiddleware(reduxPromise));
  //Weaps the store around the App component - {children} references the <App> component but can be swapped out for any component on the fly;
  return(
    <Provider store={store}>
      {children}
    </Provider>
  );
};
