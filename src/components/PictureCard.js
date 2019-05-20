import React, { Component } from 'react';
import './PictureCard.css';

class PictureCard extends Component {
  render() {
    return (
      <div className="picture-card">
        <a href={`/pictures/${this.props.id}`}>
          <img 
            src={this.props.picture} 
            alt="src" 
            height="160" 
            width="200" 
            className="picture" 
          />
        </a>
        <div className="sub-pic">
          <p>By {this.props.user}</p>
          <p className="title">{this.props.title}</p>
        </div>
      </div>
    );
  }
}


export default PictureCard;