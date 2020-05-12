import React, {Component} from 'react';
//Connect function is used to wire up imported action creators to component
import {connect} from 'react-redux';
//Imports all action creators from actions/index.js
import * as actions from 'actions';

//Component that allows users to write comments - refactored to class based component so we can access component level state and watch input from a user
class CommentBox extends Component {
  state = { comment: ''};

  //Checks that the user is logged in and pushes them to the root route if not
  shouldNavigateAway(){
    //If the user is not logged in - user login status is mapped to the component from the Redux Store
    if(!this.props.auth){
      //Pushes the user to the root route - uses the React-Router method history.push() to push the user
      this.props.history.push('/');
    }
  }

  //When the user first visits the '/Post' route execute the check logged in helper method - Executes when component first mounts (is first rendered to the screen)
  componentDidMount(){
    this.shouldNavigateAway();
  }

  //When the user clicks sign out while on the '/Post' route execute the check logged in helper method - Executes when the component updates
  componentDidUpdate(){
    this.shouldNavigateAway();
  }

  //Typing event handler - updates state based on what user types
  handleChange = (event) => {
    this.setState({ comment: event.target.value});
  };

  //On submit form event handler
  handleSubmit = event => {
    //Prevents page reloading when user clicks submit
    event.preventDefault();
    //Calls the action creator saveComment with the comment the user typed
    this.props.saveComment(this.state.comment);
    //Removes all on screen text when user clicks submit - resets the state back to blank string which is reflected on screen
    this.setState({ comment: ''});
  };

  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <h4>Add a comment</h4>
          <textarea onChange={this.handleChange} value={this.state.comment}/>
          <div>
            <button>Submit Comment</button>
          </div>
        </form>
        <button className="fetch-comments" onClick={this.props.fetchComments}>FetchComments</button>
      </div>
    );
  }
}

function mapStateToProps(state){
  return { auth : state.auth };
}

//Wires up action creators to component - as there is no mapStateToProps we put null as the first argument
export default connect(mapStateToProps, actions)(CommentBox);
