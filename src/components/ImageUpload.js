import React, { Component } from 'react';
import { storage } from '../Firebase';
import './ImageUpload.css'
import { createPicture } from '../services';
import payload from '../resolvers/payload';


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
    const name = payload(localStorage.getItem('Token')).name;
    let response = await createPicture({
      user: name,
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
        
          <form onSubmit={this.onSubmit} className="form-container">
      
            <div className="description">
              <p>Instructions: Add title and description, then choose a picture with Choose File, then click on Add File, then click on Save picture.</p>
            </div>
            <div className="container-input">
              <div className="left-side"> 
                <label className="label-upload" htmlFor="title">Title: </label>
              </div>
              <div className="right-side">
                <input
                  type="text"
                  name="title"
                  className="input-upload"
                  value={this.state.title}
                  onChange={this.onChangeInput}
                />
              </div>
            </div>

            <div className="container-input">
              <div className="left-side">
                <label className="label-upload" htmlFor="description">Description: </label>
              </div>
              <div className="right-side">
                <input
                  type="text"
                  name="description"
                  className="input-upload"
                  value={this.state.description}
                  onChange={this.onChangeInput}
                />
              </div>
            </div>
            
            <div className="upload-file">
              <input type="file" className="choose" onChange={this.handleChange}/>
              <button onClick={this.handleUpload} className="btn-pic">Add File</button>
            </div>
          </form>

        <div className="image-container">
          <img src={this.state.url || 'http://via.placeholder.com/500x400'} alt="Uploaded images" height="400" width="500"/>
          <progress value={this.state.progress} max="100"/>
          <button onClick={this.onSubmit} className="btn-pic">Save picture</button>
        </div>
          
      </div>
    );
  }
}

export default ImageUpload;