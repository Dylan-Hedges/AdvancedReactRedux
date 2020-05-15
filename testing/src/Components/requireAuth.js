import React, {Component} from 'react';
import {connect} from 'react-redux';

//Takes in a child component, executes authentication checks and renders the child component
export default ChildComponent => {
  //Parent component class
  class ComposedComponent extends Component{
      //When the user first visits the '/Post' route execute the check logged in helper method - Executes when component first mounts (is first rendered to the screen)
      componentDidMount(){
        this.shouldNavigateAway();
      }
      //When the user clicks sign out while on the '/Post' route execute the check logged in helper method - Executes when the component updates
      componentDidUpdate(){
        this.shouldNavigateAway();
      }
      //Checks that the user is logged in and pushes them to the root route if not
      shouldNavigateAway(){
        //If the user is not logged in - user login status is mapped to the component from the Redux Store
        if(!this.props.auth){
          //Pushes the user to the root route - uses the React-Router method history.push() to push the user
          this.props.history.push('/');
        }
      }
    //Renders the child component (CommentBox) and passes down from this component (parent) to CommentBox (child)
    render(){
      return <ChildComponent {...this.props}/>;
    }
  }
  function mapStateToProps(state){
    return { auth : state.auth };
  }
  return connect(mapStateToProps)(ComposedComponent);
};
