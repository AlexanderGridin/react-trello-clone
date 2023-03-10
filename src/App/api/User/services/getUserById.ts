import { httpClient } from "App/api/httpClient";
import { UserDto } from "App/entities/User/models";
import { routes } from "../routes";

export const getUserById = async (id: string): Promise<UserDto | null> => {
  const apiUrl = routes.getUser.replace("{$userId}", id);

  try {
    const response = await httpClient.get<UserDto>(apiUrl);
    return response.data;
  } catch (e) {
    return null;
  }
};
