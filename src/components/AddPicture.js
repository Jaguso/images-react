import React, { Component } from 'react';
import './AddPicture.css';
import { createPicture } from '../services';
import Firebase from '../Firebase';
import FileUploader from 'react-firebase-file-uploader';
// import axios from 'axios';


class AddPicture extends Component {

  constructor() {
    super();
    this.state = {
      description: '',
      picture: []
    }
  }

  onChangeInput = (event) => {
    const {name, value} = event.target;
    console.log("Valores: ", name, value);
    this.setState({[name]: value});
  }

  onSubmit = async(event) => {
    event.preventDefault();
    let response = await createPicture(this.state)
      .catch(e => console.log(e));
    if (response) {
      console.log(response.data)
      this.props.history.push('/');
    }
  }
  
  // fileSelectHandler = (event) => {
  //   console.log(event.target.files[0]);
  //   this.setState({
  //     picture: event.target.files[0]
  //   });
  // }

  
  // onSubmit = (event) => {
  //   event.preventDefault();
  //   const fd = new FormData();
  //   fd.set('description', this.state.description);
  //   fd.append('picture', this.state.picture, this.state.picture.name);
  //   axios.post('http://localhost:9000/picture', fd)
  //     .then(res => {
  //       console.log(res);
  //     });
  // }



  handleUploadSuccess = (filename) => {
    Firebase
      .storage()
      .ref('images')
      .child(filename)
      .getDownloadURL()
      .then(url => {
        this.setState({
          picture: url
        })
      })
  }

  handleUploadError = (error) => {
    console.log(error)
  }


  render() {
    return (
      <div className="add-pic-container">
        <form onSubmit={this.onSubmit}>

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
            <label>
              Add Picturewe
              <FileUploader
                hidden
                accept="image/*"
                randomizeFilename
                multiple
                storageRef={Firebase.storage().ref('images')}
                onUploadError={this.handleUploadError}
                onUploadSuccess={this.handleUploadSuccess}
              />
            </label>
          </div>

          {/* <div>
            <label>Add Picture </label>
            <input type="file" onChange={this.fileSelectHandler}/>
          </div> */}

          <button type="submit">Save Picture</button>
        </form>
      </div>
    );
  }
}

export default AddPicture;