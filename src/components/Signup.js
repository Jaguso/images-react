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
      console.log(response.data)
    }
  }

  render() {
    return (
      <div className="signup-container">
        <form onSubmit={this.onSubmit}>

          <div>
            <label htmlFor="name">Username: </label>
            <input 
              type="text" 
              name="name" 
              value={this.state.name} 
              onChange={this.onChangeInput} />
          </div>

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
          <button type="submit">Signup</button>
        </form>
      </div>
    );
  }
}

export default Signup;