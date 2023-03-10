import axios, { InternalAxiosRequestConfig } from "axios";
import { initMock } from "./mock/initMock";

export const httpClient = axios.create({
  baseURL: "http://localhost:2211",
});

httpClient.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  // TODO: this need to be updated with JWT access token
  const token = localStorage.getItem("userId");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

if (process.env.REACT_APP_USE_MOCK_API) {
  initMock(httpClient);
}
