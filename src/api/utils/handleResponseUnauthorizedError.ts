import { AxiosError } from "axios";

import { accessTokenStorage } from "local-storage";

import { httpClient } from "../httpClient";
import { checkUserAuthAsync } from "../User/services";

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

  const userDto = await checkUserAuthAsync();

  if (userDto._id && request) {
    accessTokenStorage.set(userDto.accessToken);
    return httpClient.request(request);
  }
};
