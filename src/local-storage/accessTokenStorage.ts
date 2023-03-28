import { createLocalStorage } from "./utils/createLocalStorage";

export const accessTokenStorage = createLocalStorage<string>("token");
