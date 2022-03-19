import axios, { AxiosError } from 'axios';

export const apiClient = axios.create({
  // baseURL: API_URL,
  headers: {
    accept: 'application/json',
    'Content-Type': 'application/json',
  },
  responseType: 'json',
});

apiClient.interceptors.response.use(
  response => {
    return response;
  },
  (error: AxiosError) => {
    return console.log(error as AxiosError);
  },
);
