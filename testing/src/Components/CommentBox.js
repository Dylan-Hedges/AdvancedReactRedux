import React, {Component} from 'react';

//Component that allows users to write comments - refactored to class based component so we can access component level state and watch input from a user
class CommentBox extends Component {
  state = { comment: ''};

  //Typing event handler - updates state based on what user types
  handleChange = (event) => {
    this.setState({ comment: event.target.value});
  };

  //On submit form event handler
  handleSubmit = event => {
    //Prevents page reloading when user clicks submit
    event.preventDefault();
    //Removes all on screen text when user clicks submit - resets the state back to blank string which is reflected on screen
    this.setState({ comment: ''});
  };

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <h4>Add a comment</h4>
        <textarea onChange={this.handleChange} value={this.state.comment}/>
        <div>
          <button>Submit Comment</button>
        </div>
      </form>
    );
  }
}

export default CommentBox;
