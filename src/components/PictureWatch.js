import React, { Component } from 'react';
import { getPicture, deletePicture } from '../services';
import './PictureWatch.css';

class PictureWatch extends Component {

  constructor(props) {
    super(props);
    this.state = {
      id: props.match.params.id,
      data: {},
      pic: ""
    }
  }

  componentDidMount() {
    getPicture(this.state.id).then(response => {
      console.log(response.data);
      this.setState({
        data: response.data,
        pic: response.data.picture[0]
      });
    }).catch(e => {
      console.log(e);
    })
  }

  onClick = () => {
    deletePicture(this.state.id).then(response => {
      console.log(response);
      this.props.history.push('/');
    })
    .catch(e => {
      if (e = "Auth failed") {
        this.props.history.push('/login');
      } else {
        console.log(e);
      }
    })
  }

  render() {
    return(
      <div className="show-image-container">
        <h2>{this.state.data.title}</h2>
        <img src={this.state.pic} alt="picture" width="800" height="400" className="pic"/>
        <div className="pic-watch">
          <p>By {this.state.data.user}</p>
          <p>Description: {this.state.data.description}</p>
        </div>
        <button className="delete" onClick={this.onClick}>Delete picture</button>
      </div>
    );
  }
}


export default PictureWatch;