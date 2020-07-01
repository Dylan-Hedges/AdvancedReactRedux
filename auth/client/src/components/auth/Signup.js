import React, {Component} from 'react';
import {reduxForm, Field} from 'redux-form';

//Signup Component, user signs up to app - Uses reduxForm to wire up component to Redux Form, uses Redux Form <Field> component to capture user inpit
class Signup extends Component{
  //Recieves/processes the data the user entered in the form (email and password)
  onSubmit = (formProps) => {
    console.log(formProps);
  };
  render(){
    //Saves the handle submit fuction - this is a Redux Form function which added to the .props of the component when wiring up Redux Form to the component
    const {handleSubmit} = this.props;
    //Renders the sign up component - onSubmit={handleSubmit(this.onSubmit)} when the user submits the form execute the onSubmit function and pass in what the user entered
    return(
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <fieldset>
          <label>Email</label>
          <Field
            name="email"
            type="input"
            component="input"
            autoComplete="none"
          />
        </fieldset>
        <fieldset>
          <label>Password</label>
          <Field
            name="password"
            type="password"
            component="input"
            autoComplete="none"
          />
        </fieldset>
        <button>Sign Up</button>
      </form>
    );
  }
}

//Exports the component and wires it up to Redux Form - {form: 'signup'} names this Redux Form signup
export default reduxForm({form: 'signup'})(Signup);
