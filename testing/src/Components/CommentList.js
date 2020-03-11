import React, {Component} from 'react';
import {connect} from 'react-redux';

//Component that renders comments on screen - class based
class CommentList extends Component {
  //Maps through comments and creates an <li> for each
  renderComments(){
    return this.props.comments.map(comment => {
      return <li key={comment}>{comment}</li>;
    });
  }
  //Displays comments on screen
  render(){
    return(
      <div>
        <ul>
          {this.renderComments()}
        </ul>
      </div>
    );
  }
}
//Maps the comments in redux store to the component (see reducers/index.js for state.comments)
function mapStateToProps(state){
  return {comments: state.comments};
}

//Exports the component and wires it up to the redux store
export default connect(mapStateToProps)(CommentList);
