import React, {Component} from 'react';

//Takes in a child component, executes logic and renders the child component
export default ChildComponent => {
  class ComposedComponent extends Component{
    //Renders the child component
    render(){
      return <ChildComponent />;
    }
  }
  return ComposedComponent;
};
