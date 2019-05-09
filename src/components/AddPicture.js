import React, { Component } from 'react';
import './AddPicture.css';
import { createPicture } from '../services';

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
    let response = await createPicture(this.state).catch();
    if (response) {
      console.log(response.data)
    }

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
            <label htmlFor="picture">Picture: </label>
            <input
              type="text"
              name="picture"
              value={this.state.picture}
              onChange={this.onChangeInput}
            />
          </div>


          <button type="submit">Add picture</button>
        </form>
      </div>
    );
  }
}

export default AddPicture;