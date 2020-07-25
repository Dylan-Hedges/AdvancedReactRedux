import React, {Component} from 'react';
import {reduxForm, Field} from 'redux-form';
import {compose} from 'redux';
import {connect} from 'react-redux';
import * as actions from '../../actions';

//Signup Component, user signs up to app - Uses reduxForm to wire up component to Redux Form, uses Redux Form <Field> component to capture user inpit
class Signup extends Component{
  //Recieves/processes the data the user entered in the form (email and password)
  onSubmit = (formProps) => {
    //Executes the signup Action Creator and passes in the email and password the user typed
    this.props.signup(formProps);
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
        <div>
          {this.props.errorMessage}
        </div>
        <button>Sign Up</button>
      </form>
    );
  }
}
//Maps the Redux Store (state) to the component (props)
function mapStateToProps(state){
  //Saves the error message in the Redux Store (under state.auth.errorMessage) to the props of this component (under the key errorMessage)
  return{errorMessage: state.auth.errorMessage};
}
//Exports the component and applies higher order functions - compose allows us to wire up multiple higher order functions to this component with clean syntax
export default compose(
  //Wires up the component to the Action creators - executes the mapStateToProps function which maps the Redux Store to the component
  connect(mapStateToProps, actions),
  //Wires up the component to Redux Form - {form: 'signup'} names this Redux Form signup
  reduxForm({form: 'signup'})
)(Signup);
