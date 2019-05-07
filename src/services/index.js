import axios from 'axios';

const API_URL = "http://localhost:9000";

const createUser = (data) => axios.post(`${API_URL}/user/signup`, data);

const loginUser = (data) => axios.post(`${API_URL}/user/login`, data);

export {
  createUser,
  loginUser
}