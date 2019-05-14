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

  componentDidMount() {
    getAllPictures().then((response) => {
      console.log(response.data);
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
        {this.state.data.map((item, i) => (
          <div style={{height: '400px'}} key={i}>
            <PictureCard
              description={item.description}
              picture={item.picture[0]}
            />
          </div>
        ))}
        <a href="/upload"><button id="upload">Add a picture</button></a>
      </div>
    );
  }
}

export default Home;