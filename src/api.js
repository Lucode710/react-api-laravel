import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:8000', // Imposta l'URL di base del tuo backend Laravel
  headers: {
    Accept: 'application/json',
  },
  withCredentials: true
});

export default instance;
