import React, { Component } from 'react';
import './Home.css';
import { getAllPictures } from '../services';

class Home extends Component {

  constructor() {
    super();
    this.state = {
      data: []
    }
  }

  componentWillMount() {
    getAllPictures().then((response) => {
      console.log(response);
      this.setState({
        data: response.data
      })

    })
  }

  render() {
    return(
      <div className="home">
        {this.state.data.map(pic => (
          <div>{pic.description}</div>
        ))}
      </div>
    );
  }
}

export default Home;