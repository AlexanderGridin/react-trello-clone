import { accessTokenStorage } from "App/local-storage";
import { AxiosError } from "axios";
import { httpClient } from "../httpClient";
import { checkAuth } from "../User/services/checkAuth";

// TODO: remove any
export const handleResponseUnauthorizedError = async (error: AxiosError<any>) => {
  const request = error.config;
  if (!error.response) {
    return;
  }

  if (error.response.data.isCheckFailed) {
    accessTokenStorage.clear();
    return;
  }

  const userDto = await checkAuth();

  if (userDto._id && request) {
    accessTokenStorage.set(userDto.accessToken);
    return httpClient.request(request);
  }
};
