import React, {Component} from 'react';
import {reduxForm, Field} from 'redux-form';

//Signup Component, user signs up to app - Uses reduxForm to wire up component to Redux Form, uses Redux Form <Field> component to capture user inpit
class Signup extends Component{
  render(){
    return(
      <form>
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
      </form>
    );
  }
}

//Exports the component and wires it up to Redux Form - {form: 'signup'} names this Redux Form signup
export default reduxForm({form: 'signup'})(Signup);
