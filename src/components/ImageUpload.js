import React, { Component } from 'react';
import { storage } from '../Firebase';
import './ImageUpload.css'
import { createPicture } from '../services';


class ImageUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null, 
      url: '',
      progress: 0,
      title: '',
      description: '',
      picture: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
  }

  handleChange = e => {
    if (e.target.files[0]) {
      const image = e.target.files[0];
      this.setState(() => ({image}));
    }
  }

  handleUpload = (e) => {
    e.preventDefault();
    const {image} = this.state;
    const uploadTask =  storage.ref(`images/${image.name}`).put(image);
    uploadTask.on('state_changed',
    (snapshot) => {
      const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
      this.setState({progress});
    }, 
    (error) => {
      console.log(error);
    }, 
    () => {
      storage.ref('images')
        .child(image.name)
        .getDownloadURL()
        .then(url => {
          console.log(url);
          this.setState({
            url: url,
            picture: [url]
          })
      });
    });
  }

  onChangeInput = (event) => {
    const {name, value} = event.target;
    console.log("Valores: ", name, value);
    this.setState({[name]: value});
  }

  onSubmit = async(event) => {
    event.preventDefault();
    let response = await createPicture({
      title: this.state.title,
      description: this.state.description,
      picture: this.state.picture
    })
      .catch(e => console.log(e));
    if (response) {
      console.log(response.data)
      this.props.history.push('/');
    }
  }

  render() {
    return (
      <div className="upload-container">
        <form onSubmit={this.onSubmit}>

          <div>
            <label htmlFor="title">Title: </label>
            <input
              type="text"
              name="title"
              value={this.state.title}
              onChange={this.onChangeInput}
            />
          </div>

          <div>
            <label htmlFor="description">Description: </label>
            <input
              type="text"
              name="description"
              value={this.state.description}
              onChange={this.onChangeInput}
            />
          </div>

          <div>
            <progress value={this.state.progress} max="100"/>
            <input type="file" onChange={this.handleChange}/>
            <button onClick={this.handleUpload}>Upload</button>
          </div>

        </form>

        
        <img src={this.state.url || 'http://via.placeholder.com/500x400'} alt="Uploaded images" height="400" width="500"/>
        <button onClick={this.onSubmit}>Save picture</button>
      </div>
    );
  }
}

export default ImageUpload;