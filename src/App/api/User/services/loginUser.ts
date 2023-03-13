import { AxiosError } from "axios";
import { httpClient } from "App/api/httpClient";
import { routes } from "../routes";
import { AuthenticatedUserDto } from "App/entities/User/models/AuthenticatedUserDto";
import { UserLoginDto } from "App/entities/User/models";

export const loginUser = async (body: UserLoginDto): Promise<AuthenticatedUserDto | AxiosError> => {
  const apiUrl = routes.login;

  try {
    const response = await httpClient.post<AuthenticatedUserDto>(apiUrl, body);
    return response.data;
  } catch (e: unknown) {
    return e as AxiosError;
  }
};
