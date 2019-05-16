import axios from 'axios';

const API_URL = "http://localhost:9000";

const createUser = (data) => axios.post(`${API_URL}/users/signup`, data);

const loginUser = (data) => axios.post(`${API_URL}/users/login`, data);

const getAllPictures = () => axios.get(`${API_URL}/pictures`);

const getPicture = (id) => axios.get(`${API_URL}/pictures/${id}`);

const createPicture = (data) => axios.post(`${API_URL}/pictures`, data,
{headers: {"Authorization": `JWT ${localStorage.getItem('Token')}`}});

const deletePicture = (id) => axios.delete(`${API_URL}/pictures/${id}`);

export {
  createUser,
  loginUser,
  getAllPictures,
  getPicture,
  createPicture,
  deletePicture
}