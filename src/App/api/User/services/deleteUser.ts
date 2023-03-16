import { httpClient } from "App/api/httpClient";
import { UserDto } from "App/entities/User/models";
import { routes } from "../routes";

export const deleteUser = async (id: string): Promise<UserDto | null> => {
  const apiUrl = routes.deleteUser.replace("{$userId}", id);

  try {
    const response = await httpClient.delete<UserDto>(apiUrl);
    return response.data;
  } catch (e) {
    return null;
  }
};
