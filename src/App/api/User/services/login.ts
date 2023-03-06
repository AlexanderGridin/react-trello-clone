import { AxiosError } from "axios";
import { httpClient } from "App/api/httpClient";
import { UserCreateDto, UserDto } from "App/entities/User/models";
import { routes } from "../routes";

export const login = async (body: UserCreateDto): Promise<UserDto | AxiosError> => {
  const apiUrl = routes.login;

  try {
    const response = await httpClient.post<UserDto>(apiUrl, body);
    return response.data;
  } catch (e: unknown) {
    return e as AxiosError;
  }
};
