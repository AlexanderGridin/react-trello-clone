import { httpClient } from "App/api/httpClient";
import { UserDto } from "App/entities/User/models";

export const deleteUser = async (id: string): Promise<UserDto | null> => {
  const apiUrl = "/user/{$userId}".replace("{$userId}", id);

  try {
    const response = await httpClient.delete<UserDto>(apiUrl);
    return response.data;
  } catch (e) {
    return null;
  }
};
