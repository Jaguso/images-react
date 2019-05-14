import React, { Component } from 'react';


class PictureCard extends Component {
  render() {
    return (
      <div>
        {this.props.description}
        <img src={this.props.picture} alt="pokf" height="400" width="300" />
      </div>
    );
  }
}


export default PictureCard;