import { UserDto } from "App/entities/User/models";

import { routes } from "../routes";
import { httpClient } from "../../httpClient";

export const getUserByIdAsync = async (id: string): Promise<UserDto | null> => {
  const apiUrl = routes.getUser.replace("{$userId}", id);

  try {
    const response = await httpClient.get<UserDto>(apiUrl);
    return response.data;
  } catch (e) {
    return null;
  }
};
