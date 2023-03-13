import { accessTokenStorage } from "App/local-storage";
import { InternalAxiosRequestConfig } from "axios";

export const interceptRequest = (config: InternalAxiosRequestConfig) => {
  const token = accessTokenStorage.get();

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
};
