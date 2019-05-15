import React, { Component } from 'react';
import './PictureCard.css';

class PictureCard extends Component {
  render() {
    return (
      <div className="picture-card">
        <a href="/">
          <img 
            src={this.props.picture} 
            alt="image" 
            height="160" 
            width="200" 
            className="picture" 
          />
        </a>
        <p className="title">{this.props.title}</p>
      </div>
    );
  }
}


export default PictureCard;