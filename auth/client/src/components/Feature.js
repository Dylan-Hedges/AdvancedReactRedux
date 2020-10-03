import React, {Component} from 'react';
import requireAuth from './requireAuth';

//Component that user gets redirect to after signing in
class Feature extends Component{
  render(){
    return(
      <div>Feature Component</div>
    )
  }
}

export default requireAuth(Feature);
