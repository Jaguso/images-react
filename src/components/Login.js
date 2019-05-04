import React, { Component } from 'react';
import './Login.css';

class Login extends Component {

  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    }
  }

  onChangeInput = (event) => {
    const {name, value} = event.target;
    console.log("Valores: ", name, value);
    this.setState({[name]: value});
  }

  onSubmit = (event) => {
    event.preventDefault();
    console.log('send');
  }

  render() {
    return (
      <div className="login-container">
        <form onSubmit={this.onSubmit}>

          <div>
            <label htmlFor="email">Email: </label>
            <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.onChangeInput}
            />
          </div>

          <div>
            <label>Password: </label>
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.onChangeInput}
            />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}

export default Login;