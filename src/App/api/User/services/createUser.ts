import { httpClient } from "App/api/httpClient";
import { UserCreateDto, UserDto } from "App/entities/User/models";
import { AxiosError } from "axios";
import { routes } from "../routes";

export const createUser = async (body: UserCreateDto): Promise<UserDto | AxiosError> => {
  const apiUrl = routes.createUser;

  try {
    const response = await httpClient.post<UserDto>(apiUrl, body);
    return response.data;
  } catch (e) {
    return e as AxiosError;
  }
};
