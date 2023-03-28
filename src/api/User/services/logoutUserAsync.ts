import { routes } from "../routes";
import { httpClient } from "../../httpClient";

export const logoutUserAsync = async (): Promise<void> => {
  const apiUrl = routes.logout;

  try {
    await httpClient.get(apiUrl);
  } catch (e) {
    console.log(e);
  }
};
