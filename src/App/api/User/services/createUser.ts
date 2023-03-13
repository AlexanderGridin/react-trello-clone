import { httpClient } from "App/api/httpClient";
import { UserCreateDto } from "App/entities/User/models";
import { AuthenticatedUserDto } from "App/entities/User/models/AuthenticatedUserDto";
import { AxiosError } from "axios";
import { routes } from "../routes";

export const createUser = async (body: UserCreateDto): Promise<AuthenticatedUserDto | AxiosError> => {
  const apiUrl = routes.createUser;

  try {
    const response = await httpClient.post<AuthenticatedUserDto>(apiUrl, body);
    return response.data;
  } catch (e) {
    return e as AxiosError;
  }
};
