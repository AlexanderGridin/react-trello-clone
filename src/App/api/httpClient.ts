import axios from "axios";
import { initMock } from "./mock/initMock";

export const httpClient = axios.create({
  baseURL: "http://localhost:2211",
});

if (process.env.REACT_APP_USE_MOCK_API) {
  initMock(httpClient);
}
