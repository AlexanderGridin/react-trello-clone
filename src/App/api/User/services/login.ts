import { AxiosError } from "axios";
import { httpClient } from "App/api/httpClient";
import { UserCreateDto } from "App/entities/User/models";
import { routes } from "../routes";
import { AuthenticatedUserDto } from "App/entities/User/models/AuthenticatedUserDto";

export const login = async (body: UserCreateDto): Promise<AuthenticatedUserDto | AxiosError> => {
  const apiUrl = routes.login;

  try {
    const response = await httpClient.post<AuthenticatedUserDto>(apiUrl, body);
    return response.data;
  } catch (e: unknown) {
    return e as AxiosError;
  }
};
