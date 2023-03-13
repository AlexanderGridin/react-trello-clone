import { AxiosError } from "axios";
import { httpClient } from "App/api/httpClient";
import { UserCreateDto, UserDto } from "App/entities/User/models";
import { routes } from "../routes";

export interface UserLoginDto extends UserDto {
  accessToken: string;
}

export const login = async (body: UserCreateDto): Promise<UserLoginDto | AxiosError> => {
  const apiUrl = routes.login;

  try {
    const response = await httpClient.post<UserLoginDto>(apiUrl, body);
    return response.data;
  } catch (e: unknown) {
    return e as AxiosError;
  }
};
