import React, { Component } from 'react';
import { getPicture } from '../services';

class PictureWatch extends Component {

  constructor(props) {
    super(props);
    this.state = {
      id: props.match.params.id,
      data: []
    }
  }

  componentDidMount() {
    getPicture(this.state.id).then(response => {
      this.setState({
        data: response.data
      });
      console.log(data);
    }).catch(e => {
      console.log(e);
    })
  }

  render() {
    console.log(this.state.data)
    return(
      <div>
        dfpog
        {/* <img src={this.state.data.picture[0]}/> */}
      </div>
    );
  }
}


export default PictureWatch;