import axios from 'axios';

const API_URL = "http://localhost:9000";

const createUser = (data) => axios.post(`${API_URL}/user/signup`, data);

const loginUser = (data) => axios.post(`${API_URL}/user/login`, data);

const getAllPictures = () => axios.get(`${API_URL}/picture`);

export {
  createUser,
  loginUser,
  getAllPictures
}