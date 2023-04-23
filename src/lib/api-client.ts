import Axios from 'axios';

import { API_URL } from '@/config/constants';

export const apiClient = Axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

apiClient.interceptors.response.use(
  (resp) => {
    return resp.data;
  },
  (err) => {
    const message = err?.response?.data?.message || err.message;
    console.error(message);
    return Promise.reject(message);
  }
);
