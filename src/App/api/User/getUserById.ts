import { UserDto } from "App/entities/User/models";
import { httpClient } from "../httpClient";

export const getUserById = async (id: string): Promise<UserDto | null> => {
  const apiUrl = "/user/{$userId}".replace("{$userId}", id);

  try {
    const response = await httpClient.get<UserDto>(apiUrl);
    return response.data;
  } catch (e) {
    return null;
  }
};
