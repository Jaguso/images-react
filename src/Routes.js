import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Signup from './components/Signup';
import Login from './components/Login';
import AddPicture from './components/AddPicture';
import AddPicture2 from './components/AddPicture2';
// import Img from './components/Img';

class Routes extends Component {
  render() {
    return (
    <BrowserRouter>
      <main>
        <Navbar/>
        <Route exact path="/" component={Home}/>
        <Route exact path="/signup" component={Signup}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/addpic" component={AddPicture}/>
      </main>
    </BrowserRouter>
    );
  }
}

export default Routes;