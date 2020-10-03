import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions/index';

class Signout extends Component{
  componentDidMount(){
    //Signs out user on component mount- Executes the signout Action Creator which clears the JWT in localStorage and the Redux Store
    this.props.signout();
  }
  render(){
    return(
      <div> Sorry to see you go</div>
    )
  }
}

export default connect(null, actions)(Signout);
