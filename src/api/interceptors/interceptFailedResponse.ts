import { AxiosError } from "axios";
import { handleResponseUnauthorizedError } from "../utils/handleResponseUnauthorizedError";

export const interceptFailedResponse =
  // TODO: remove any
  async (error: AxiosError<any>) => {
    if (!error.response?.status || error.response.status !== 401) {
      throw error;
    }

    return await handleResponseUnauthorizedError(error);
  };
