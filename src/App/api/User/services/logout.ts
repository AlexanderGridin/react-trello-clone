import { httpClient } from "App/api/httpClient";
import { routes } from "../routes";

export const logout = async (): Promise<void> => {
  const apiUrl = routes.logout;

  try {
    await httpClient.get(apiUrl);
  } catch (e) {
    console.log(e);
  }
};
