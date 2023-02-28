import axios from "axios";

// const MOCK_MODE = true;

const axiosClient = axios.create({
  baseURL: "http://localhost:2211",
});

export const httpClient = axiosClient;
