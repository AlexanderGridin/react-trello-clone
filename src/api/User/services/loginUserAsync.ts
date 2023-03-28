import { AxiosError } from "axios";

import { UserLoginDto } from "App/entities/User/models";
import { AuthenticatedUserDto } from "App/entities/User/models/AuthenticatedUserDto";

import { routes } from "../routes";
import { httpClient } from "../../httpClient";

export const loginUserAsync = async (body: UserLoginDto): Promise<AuthenticatedUserDto | AxiosError> => {
  const apiUrl = routes.login;

  try {
    const response = await httpClient.post<AuthenticatedUserDto>(apiUrl, body);
    return response.data;
  } catch (e: unknown) {
    return e as AxiosError;
  }
};
