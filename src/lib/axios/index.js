import axios from 'axios';
import config from '../../config';

const refreshAxiosInstance = axios.create({
  baseURL: config.api.baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

const axiosInstance = axios.create({
  baseURL: config.api.baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

let isRefreshing = false;
let failedQueue = [];

const processQueue = (error, token = null) => {
  failedQueue.forEach(promise => {
    if (error) {
      promise.reject(error);
    } else {
      promise.resolve(token);
    }
  });

  failedQueue = [];
};

axiosInstance.interceptors.request.use(
  async config => {
    try {
      return config;

      // Check if the session has an accessToken
      // if (session?.accessToken) {
      //   // Attach the token in the Authorization header
      //   config.headers.Authorization = `Bearer ${session.accessToken}`;
      // }
    } catch (error) {
      console.error('Error getting session or token', error);
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// Response interceptor to handle errors globally
axiosInstance.interceptors.response.use(
  response => response,
  async error => {
    const originalRequest = error.config;

    console.log('error.response?.status', error.response?.status);

    // If the error is not 401 or the request has already been retried, reject the promise
    if (error.response?.status !== 401 || originalRequest._retry) {
      return Promise.reject(error);
    }

    if (isRefreshing) {
      // If a refresh is already in progress, add the request to the queue
      return new Promise((resolve, reject) => {
        failedQueue.push({ resolve, reject });
      })
        .then(token => {
          originalRequest.headers.Authorization = `Bearer ${token}`;
          return axiosInstance(originalRequest);
        })
        .catch(err => Promise.reject(err));
    }

    originalRequest._retry = true;
    isRefreshing = true;

    // Try to refresh the token
    try {
      processQueue(new Error('Failed to refresh token'));
      localStorage.removeItem('auth-storage');
      window.location.href = '/login';
      return Promise.reject(error);
    } catch (refreshError) {
      processQueue(refreshError);
      isRefreshing = false;
      localStorage.removeItem('auth-storage');
      window.location.href = '/login';
      return Promise.reject(refreshError);
    }
  }
);

export default axiosInstance;
