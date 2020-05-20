//Library that checks that data complies with a provided JSON schema
import tv4 from 'tv4';
//Imports the JSON schema that tv4 will use to compare agaisnt the data - schema created using JSON Schema Tool
import stateSchema from './stateSchema';

//Middleware - checks the data in the Redux Store matches the required data structure - getState() is a function that grabs the updated Redux Store state calculated by the Reducers
export default ({dispatch, getState}) => (next) => (action) => {
  //Immediately sends the action onto the next middleware - this middleware executes only after the Reducers have calculated the updated Redux Store state
  next(action);
  //Compares the updated Redux Store state calculated by the Reducers with the JSON schema - if the data does not comply with the JSON schema (i.e. false is returned)
  if(!tv4.validate(getState(), stateSchema)){
    //Give a console warning to the user
    console.warn('Invalid state schema detected')
  };

};
