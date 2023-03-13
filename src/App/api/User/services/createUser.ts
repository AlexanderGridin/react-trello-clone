import { httpClient } from "App/api/httpClient";
import { UserCreateDto, UserDto } from "App/entities/User/models";
import { AxiosError } from "axios";
import { routes } from "../routes";

interface CreateUserDto extends UserDto {
  accessToken: string;
}

export const createUser = async (body: UserCreateDto): Promise<CreateUserDto | AxiosError> => {
  const apiUrl = routes.createUser;

  try {
    const response = await httpClient.post<CreateUserDto>(apiUrl, body);
    return response.data;
  } catch (e) {
    return e as AxiosError;
  }
};
