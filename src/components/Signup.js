import React, { Component } from 'react';
import './Signup.css';
import { createUser } from '../services';

class Signup extends Component {

  constructor() {
    super();
    this.state = {
      name: "",
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
    let response = await createUser(this.state).catch()
    if (response) {
      const token = response.data.token
      localStorage.setItem('Token', token);
      this.props.history.push('/');
    }
  }

  render() {
    return (
      <div className="signup-container">
        <form onSubmit={this.onSubmit}>

          <div className="container-input">
            <div className="left">
              <label className="label" htmlFor="name">Username: </label>
            </div>
            <div className="right">
              <input 
                type="text" 
                name="name" 
                className="input"
                value={this.state.name} 
                onChange={this.onChangeInput} 
              />
            </div>
          </div>

          <div className="container-input">
            <div className="left">
              <label className="label" htmlFor="email">Email: </label>
            </div>
            <div className="right">
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
            <div className="left">
              <label className="label" htmlFor="password">Password: </label>
            </div>
            <div className="right">
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
            <button className="register" type="submit">Signup</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Signup;