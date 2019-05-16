import React, { Component } from 'react';
import { getPicture } from '../services';

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
    console.log(this.state.id)
    getPicture(this.state.id).then(response => {
      console.log(response.data);
      this.setState({
        data: response.data,
        pic: response.data.picture[0]
      });
      console.log(this.state)
    }).catch(e => {
      console.log(e);
    })
  }

  render() {
    console.log(this.state.data.picture)
    return(
      <div>
        sdfg
        <img src={this.state.pic} width="500" height="400"/>
      </div>
    );
  }
}


export default PictureWatch;