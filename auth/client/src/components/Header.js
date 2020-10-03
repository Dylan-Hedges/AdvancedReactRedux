import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import './HeaderStyle.css';

//Header/Navbar component - has react-router links for different routes which will display components when visited
class Header extends Component{
  //Displays menu items based if the user is signed in or signed out - uses conditional rendering, checks that the user has a JWT which is saved in the Redux Store
  renderLinks(){
    if(this.props.authenticated){
      return(
        <div>
          <Link to ="/signout">Sign out</Link>
          <Link to ="/feature">feature</Link>
        </div>
      );
    }else{
      return(
        <div>
          <Link to ="/signup">Sign up</Link>
          <Link to ="/signin">Sign in</Link>
        </div>
      );
    }
  }
  //Renders the menu and menu items - executes the renderLinks() helper function which contains logic that determines what menu items are shown
  render(){
    return(
      <div className="header">
        <Link to ="/">Redux Auth</Link>
        {this.renderLinks()}
      </div>
    );
  }
}

//Maps the Redux Store to the component
function mapStateToProps(state){
  //Saves the JWT in the Redux Store (state.auth.authenticated) to an authenticated prop for this component
  return {authenticated: state.auth.authenticated};
}

export default connect(mapStateToProps)(Header);
