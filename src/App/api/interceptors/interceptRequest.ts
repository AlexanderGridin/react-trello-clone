import { InternalAxiosRequestConfig } from "axios";

export const interceptRequest = (config: InternalAxiosRequestConfig) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
};
