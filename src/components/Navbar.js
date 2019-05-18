import React, { Component } from 'react';
import './Navbar.css'
import payload from '../resolvers/payload';
import isAuthenticated from '../resolvers/isAuthenticated';

class Navbar extends Component {

  authRender = () => {
    if (isAuthenticated()) {
      let name = payload(localStorage.getItem('Token')).name;
      return (
        <div className="auth-container">
          <p className="name">Hola {name}</p>
          <a href="/logout"><button className="login">Logout</button></a>
        </div>
      );
    } else {
      return (
        <div>
          <a href="/signup"><button className="signup">Signup</button></a> 
          <a href="/login"><button className="login">Login</button></a>
        </div>
      );
    }
  }

  render() {
    return (
      <nav className="navbar">
        <div className="logo">
          <h1><a href="/" className="logo-font">Pictures</a></h1>
        </div>
        <div>
          {this.authRender()}
        </div>
      </nav>
    );
  }
}

export default Navbar;