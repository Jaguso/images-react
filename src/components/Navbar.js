import React, { Component } from 'react';
import './Navbar.css'

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <div className="logo">
          <h1>Pictures</h1>
        </div>
        <div>
          <button className="signup">Signup</button>
          <button className="login">Login</button>
        </div>
      </nav>
    );
  }
}

export default Navbar;