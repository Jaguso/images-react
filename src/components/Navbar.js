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
          <button className="signup"><a href="/signuplogin" style={{color: 'white'}}>Signup</a> </button>
          <button className="login"><a href="/signuplogin" style={{color: 'white'}}>Login</a></button>
        </div>
      </nav>
    );
  }
}

export default Navbar;