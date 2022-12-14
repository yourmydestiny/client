import axios from 'axios';

export const BASE_URL = process.env.REACT_APP_SERVER_URL;

export const basicApi = axios.create({
  baseURL: `${BASE_URL}`,
  timeout: 3000,
  headers: { 'Content-Type': 'application/json;charset=utf-8' },
});
