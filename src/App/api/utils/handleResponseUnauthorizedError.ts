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
    localStorage.removeItem("token");
    return;
  }

  const userDto = await checkAuth();

  if (userDto._id && request) {
    localStorage.setItem("token", userDto.accessToken);
    return httpClient.request(request);
  }
};
