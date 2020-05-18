//Redux Promise middleware recreation - function that returns a function that returns a function
export default ({displatch}) => next => action => {
  //Checks to see if the action has a Promise on its payload - checks if there is no payload OR the action does not have a then function, if there is no Promise it forwards the action to the next middleware in the chain
  if(!action.payload || !action.payload.then){
    //Forwards action to the next middleware in the chain
    return next(action);
  }
  //If there is a Promise on the action payload - Waits for the asynchronous request to complete then dispatches the action, as the request is a Promise .then() is used to process the data returned, the data (response) is passed into a function which dispatches a new action
  action.payload.then(function(response){
    //Creates a new action, copies the action properies using the spread operator, overwrites the payload property with the data returned from the asynchronous request
    const newAction = {...action, payload: response};
    //Dispatches the new action
    displatch(newAction);
  });
};
