import React, {Component} from 'react';
import {reduxForm, Field} from 'redux-form';
import {compose} from 'redux';
import {connect} from 'react-redux';
import * as actions from '../../actions';

//Sign in component - allows user to sign in with email and password (uses the same logic as the Sign Up component)
class Signin extends Component{
  onSubmit = (formProps) => {
    this.props.signin(formProps, () => {
      this.props.history.push('/feature');
    });
  };
  render(){
    const {handleSubmit} = this.props;
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
        <button>Sign In</button>
      </form>
    );
  }
}

function mapStateToProps(state){
  return{errorMessage: state.auth.errorMessage};
}

export default compose(
  connect(mapStateToProps, actions),
  reduxForm({form: 'signin'})
)(Signin);
