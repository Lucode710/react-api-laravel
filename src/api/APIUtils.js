import axios from 'axios';
import 'dotenv/config';

// Your Laravel URL API setting in .env
urlAPI = process.env.LARAVEL_URL

const instance = axios.create({
  baseURL: urlAPI, 
  headers: {
    Accept: 'application/json',
  },
  withCredentials: true
});

export default instance;
