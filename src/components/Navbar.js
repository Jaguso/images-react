import React, { Component } from 'react';
import './Navbar.css'

class Navbar extends Component {


  render() {
    return (
      <nav className="navbar">
        <div className="logo">
          <h1><a href="/" className="logo-font">Pictures</a></h1>
        </div>
        <div>
          <a href="/signup"><button className="signup">Signup</button></a> 
          <a href="/login"><button className="login">Login</button></a>
        </div>
      </nav>
    );
  }
}

export default Navbar;