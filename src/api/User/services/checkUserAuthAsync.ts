import { AuthenticatedUserDto } from "entities/User/models";

import { routes } from "../routes";
import { httpClient } from "../../httpClient";

export const checkUserAuthAsync = async (): Promise<AuthenticatedUserDto> => {
  const apiUrl = routes.checkAuth;

  try {
    const response = await httpClient.get<AuthenticatedUserDto>(apiUrl);
    return response.data;
  } catch (e) {
    return { ...new AuthenticatedUserDto() };
  }
};
