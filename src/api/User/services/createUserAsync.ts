import { AxiosError } from "axios";

import { UserCreateDto } from "entities/User/models";
import { AuthenticatedUserDto } from "entities/User/models/AuthenticatedUserDto";

import { routes } from "../routes";
import { httpClient } from "../../httpClient";

export const createUserAsync = async (body: UserCreateDto): Promise<AuthenticatedUserDto | AxiosError> => {
  const apiUrl = routes.createUser;

  try {
    const response = await httpClient.post<AuthenticatedUserDto>(apiUrl, body);
    return response.data;
  } catch (e) {
    return e as AxiosError;
  }
};
