import axios from 'axios';
import store from '../redux/store';
import { setInitialAuthState } from '../redux/auth';
import { setInitialJwtState } from '../redux/jwt';
import { toast } from 'react-toastify';

const $api = axios.create({
  baseURL: 'http://localhost:8080',
  headers: {
    'Content-Type': 'application/json'
  }
});

$api.interceptors.request.use((config) => {
  try {
    const auth = JSON.parse(localStorage.getItem('auth'));
    if (auth?.accessToken) {
      config.headers['Authorization'] = 'Bearer ' + auth?.accessToken;
    }
  } catch (err) {
    console.error('error when reading state from localStorage');
  }
  return config;
});

$api.interceptors.response.use(
  (response) => response,
  (error) => {
    let response = null;
    if (error.response.status === 502) {
      response = {
        code: 'NETWORK_ERR',
        description: 'The service is not available. Please try again later'
      };
      toast.warn(response.description);
    } else if (!error.response) {
      console.error(error);
      response = {
        error: {
          code: 'UNEXPECTED',
          description: 'Technical problems. Please contact support'
        }
      };
      toast.warn(response.description);
    } else if (error.response.data?.error?.code === 'MAIN100003') {
      localStorage.clear();
      store.dispatch(setInitialJwtState());
      store.dispatch(setInitialAuthState());
      console.error('have some troubles with tokens or user account');
      toast.warn('We have a problem with the authorization of your account. Please log in again');
    }
    if (response) {
      return Promise.reject(response);
    }
    return Promise.reject(error);
  }
);

export default $api;
