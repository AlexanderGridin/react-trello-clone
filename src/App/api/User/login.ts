import { UserDto } from "App/entities/User/models";
import { AxiosError } from "axios";
import { httpClient } from "../httpClient";

export const login = async (body: { name: string; password: string }): Promise<UserDto | AxiosError> => {
  const apiUrl = "/user/login";

  try {
    const response = await httpClient.post<UserDto>(apiUrl, body);
    return response.data;
  } catch (e: unknown) {
    return e as AxiosError;
  }
};
