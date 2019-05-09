import React, { Component } from 'react';


class PictureCard extends Component {
  render() {
    return (
      <div>
        {this.props.description}
        <img src={this.props.picture} alt="pokf"/>
      </div>
    );
  }
}


export default PictureCard;