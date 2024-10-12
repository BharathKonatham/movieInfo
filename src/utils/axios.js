import axios from 'axios';

// Create an Axios instance
const axiosInstance = axios.create({
  baseURL: 'https://movie-database-alternative.p.rapidapi.com/?s=', // Base URL for all API requests
  headers: {
    'X-RapidAPI-Key': '13a369b66bmsh31eb42c18f21e2ep1bef23jsn8aa522aee192',
    'X-RapidAPI-Host': 'movie-database-alternative.p.rapidapi.com'
  }
});

export default axiosInstance;
