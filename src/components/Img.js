import React, { Component } from 'react';

import axios from 'axios';


class Img extends Component {

  constructor(props) {
    super(props);
    this.state = {
      img: ''
    };
  }

  arrayBufferToBase64(buffer) {
    var binary = '';
    var bytes = [].slice.call(new Uint8Array(buffer));
    bytes.forEach((b) => binary += String.fromCharCode(b));
    return window.btoa(binary);
  };

  componentDidMount() {
    axios.get('http://localhost:9000/img/img_data')
      // .then(res => res.json())
      .then((data) => {
        console.log(data);

        var base64Flag = 'data:image/jpeg;base64';
        var imageStr = this.arrayBufferToBase64(data.img.data.data);

        this.setState({
          img: base64Flag + imageStr
      })
    })
  }

  render() {
    const {img} = this.state;
    return(
      <div>
        <img src={img} alt="something"/>
      </div>
    );
  }
}

export default Img;