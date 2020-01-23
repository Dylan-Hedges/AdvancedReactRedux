import React, {Component} from 'react';

//Component that allows users to write comments - refactored to class based component so we can access component level state and watch input from a user
class CommentBox extends Component {
  render(){
    return(
      <form>
        <h4>Add a comment</h4>
        <textarea />
        <div>
          <button>Submit Comment</button>
        </div>
      </form>
    )
  }
}

export default CommentBox;
