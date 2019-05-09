import React, { Component } from 'react';
import './AddPicture.css';
import { createPicture } from '../services';
// import Firebase from '../Firebase';
// import FileUploader from 'react-firebase-file-uploader';

class AddPicture extends Component {

  constructor() {
    super();
    this.state = {
      description: '',
      picture: ''
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

  // handleUploadSuccess = (filename) => {
  //   Firebase
  //     .storage()
  //     .ref('images')
  //     .child(filename)
  //     .getDownloadURL()
  //     .then(url => {
  //       this.setState({
  //         picture: url
  //       })
  //     })
  // }

  // handleUploadError = (error) => {
  //   console.log(error)
  // }


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

          {/* <div>
            <label htmlFor="picture">Picture: </label>
            <input
              type="text"
              name="picture"
              value={this.state.picture}
              onChange={this.onChangeInput}
            />
          </div> */}

          {/* <div>
            <label>
              Add Picture
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
          </div> */}


          <button type="submit">Save Picture</button>
        </form>
      </div>
    );
  }
}

export default AddPicture;