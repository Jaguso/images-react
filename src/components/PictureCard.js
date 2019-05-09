import React, { Component } from 'react';


class PictureCard extends Component {
  render() {
    return (
      <div>
        {this.props.description}
      </div>
    );
  }
}


export default PictureCard;