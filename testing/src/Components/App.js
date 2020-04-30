import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom';
import {connect} from 'react-redux';
import CommentBox from 'Components/CommentBox';
import CommentList from 'Components/CommentList';
import * as actions from 'actions';

class App extends Component {
  //Displays sign in or sign out button - looks at auth state (saved as a prop to this component) to see if user is logged in and displays sign in or sign out button
  renderButton(){
    if(this.props.auth){
      return(
        <button onClick={() => this.props.changeAuth(false)}>Sign Out</button>
      );
    }else{
      return(
        <button onClick={() => this.props.changeAuth(true)}>Sign In</button>
      );
    }
  }
  //Header that displays menu options - uses React Router to navigate
  renderHeader(){
    return(
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="Post">Post</Link></li>
        <li>{this.renderButton()}</li>
      </ul>
    );
  }
  //Displays component on screen
  render(){
    return(
      <div>
        {this.renderHeader()}
        <Route path="/post" component={CommentBox} />
        <Route path="/" exact component={CommentList} />
      </div>
    );
  }
}
//Maps the Redux Store to the this component - saved under the auth prop
function mapStateToProps(state){
  return {auth: state.auth}
}

//Exports the component and connects it to the Redux Store
export default connect(mapStateToProps, actions)(App);
