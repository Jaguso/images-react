import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import SignupLogin from './components/SignupLogin';

class Routes extends Component {
  render() {
    return (
    <BrowserRouter>
      <main>
        <Navbar/>
        <Route exact path="/" component={Home}/>
        <Route exact path="/signuplogin" component={SignupLogin}/>
      </main>
    </BrowserRouter>
    );
  }
}

export default Routes;