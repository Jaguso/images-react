import React, { Component } from 'react';
import Signup from './signup/Signup';
import Login from './login/Login';
import './SignupLogin.css';

class SignupLogin extends Component {
  render() {
    return (
      <div className="signuplogin-container">
        <div className="signup-container">
          <Signup/>
        </div>
        <div className="login-container">
          <Login/>
        </div>
      </div>
    );
  }
}

export default SignupLogin;