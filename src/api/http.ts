import axios from "axios";

axios.defaults.baseURL = "http://localhost:2211";

export const http = axios.create();
