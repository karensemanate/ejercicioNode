import axios from 'axios';

const apiKYS = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

apiKYS.interceptors.request.use(
  (config) => {
    const tokenKYS = localStorage.getItem(process.env.REACT_APP_TOKEN_NAME);
    if (tokenKYS) {
      config.headers.Authorization = `Bearer ${tokenKYS}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default apiKYS;