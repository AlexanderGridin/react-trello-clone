import axios from "axios";
import { interceptFailedResponse } from "./interceptors/interceptFailedResponse";
import { interceptRequest } from "./interceptors/interceptRequest";
import { initMock } from "./mock/initMock";

export const httpClient = axios.create({
  baseURL: "http://localhost:2211",
  withCredentials: true,
});

httpClient.interceptors.request.use(interceptRequest);
httpClient.interceptors.response.use((successResponse: any) => successResponse, interceptFailedResponse);

if (process.env.REACT_APP_USE_MOCK_API) {
  initMock(httpClient);
}
