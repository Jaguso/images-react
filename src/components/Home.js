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
        data: response.data,
      })
    }).catch((e) => {
      console.log(e);
    })
  }


  render() {
    return(
      <div className="home">
        <div className="pics">
          {this.state.data.map((item, i) => (
            <div key={i}>
              <PictureCard
                title={item.title}
                description={item.description}
                picture={item.picture[0]}
                id={item._id}
              />
            </div>
          ))}
        </div>
        <div className="add-container">
          <a href="/upload"><button className="add-button">Add a picture</button></a>
        </div>
      </div>
    );
  }
}

export default Home;