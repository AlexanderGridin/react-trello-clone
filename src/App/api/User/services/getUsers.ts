import { httpClient } from "App/api/httpClient";
import { UserDto } from "App/entities/User/models";

export const getUsers = async (): Promise<UserDto[]> => {
  const apiUrl = "/users";

  try {
    const response = await httpClient.get<UserDto[]>(apiUrl);
    return response.data;
  } catch (e) {
    return [];
  }
};
