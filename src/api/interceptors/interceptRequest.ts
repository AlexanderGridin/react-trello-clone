import { InternalAxiosRequestConfig } from "axios";

import { accessTokenStorage } from "local-storage";

export const interceptRequest = (config: InternalAxiosRequestConfig) => {
  const token = accessTokenStorage.get();

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
};
