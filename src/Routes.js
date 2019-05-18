import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import isAuthenticated from './resolvers/isAuthenticated';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Signup from './components/Signup';
import Login from './components/Login';
import ImageUpload from './components/ImageUpload';
import PictureWatch from './components/PictureWatch';


const PrivateRoute = ({component: Component, ...rest}) => (
  <Route {...rest} render = {(props) => (
    isAuthenticated() ? <Component {...props}/> : <Redirect to="/login"/>
  )} />
);

class Routes extends Component {
  render() {
    return (
    <BrowserRouter>
      <main>
        <Navbar/>
        <Route exact path="/" component={Home}/>
        <Route exact path="/signup" component={Signup}/>
        <Route exact path="/login" component={Login}/>
        <PrivateRoute exact path="/upload" component={ImageUpload}/>
        <Route exact path="/pictures/:id" component={PictureWatch}/>
      </main>
    </BrowserRouter>
    );
  }
}

export default Routes;