import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://192.168.1.15:8080',
  withCredentials: false,
  headers: {
    'Content-Type': 'application/json',
  },
});

instance.interceptors.request.use((config) => {
  const token = sessionStorage.getItem('accessToken');

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default instance;
