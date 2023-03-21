import { httpClient } from "App/api/httpClient";
import { UserDto } from "App/entities/User/models";
import { routes } from "../routes";

export const getUsersAsync = async (): Promise<UserDto[]> => {
  const apiUrl = routes.getUsers;

  try {
    const response = await httpClient.get<UserDto[]>(apiUrl);
    return response.data;
  } catch (e) {
    return [];
  }
};
