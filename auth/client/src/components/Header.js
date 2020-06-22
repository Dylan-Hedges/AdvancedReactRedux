import React, {Component} from 'react';
import {Link} from 'react-router-dom';

//Header/Navbar component - has react-router links for different routes which will display components when visited
class Header extends Component{
  render(){
    return(
      <div>
        <Link to ="/">Redux Auth</Link>
        <Link to ="/signup">Sign up</Link>
        <Link to ="/signin">Sign in</Link>
        <Link to ="/signout">Sign out</Link>
        <Link to ="/feature">feature</Link>
      </div>
    );
  }
}

export default Header;
