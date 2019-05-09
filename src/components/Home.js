import React, { Component } from 'react';
import PictureCard from './PictureCard';
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
    }).catch((e) => {
      console.log(e);
    })
  }

  render() {
    return(
      <div className="home">
        {this.state.data.map((pic, i) => (
          <div style={{height: '400px'}} key={i}>
            <PictureCard
              description={pic.description}
              picture={pic.picture}
            />
          </div>
        ))}
        <a href="/addpic"><button id="upload">Add a picture</button></a>
      </div>
    );
  }
}

export default Home;