import React, { Component } from 'react';
import { loginUser } from '../services';
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

  onSubmit = async(event) => {
    event.preventDefault();
    let response = await loginUser(this.state).catch();
    if (response) {
      const token = response.data.token
      localStorage.setItem('Token', token);
      this.props.history.push('/');
    }
  }

  render() {
    return (
      <div className="login-container">
        <form onSubmit={this.onSubmit}>

          <div className="container-input">
            <div className="left-side">
              <label className="label" htmlFor="email">Email: </label>
            </div>
            <div className="right-side">
              <input
                type="email"
                name="email"
                className="input"
                value={this.state.email}
                onChange={this.onChangeInput}
              />
            </div>
          </div>

          <div className="container-input">
            <div className="left-side">
              <label className="label" htmlFor="password">Password: </label>
            </div>
            <div className="right-side">
              <input
                type="password"
                name="password"
                className="input"
                value={this.state.password}
                onChange={this.onChangeInput}
              />
            </div>
          </div>
          <div className="add-container">
            <button className="login-btn" type="submit">Login</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;