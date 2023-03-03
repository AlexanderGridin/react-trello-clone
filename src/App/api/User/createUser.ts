import { UserDto } from "App/entities/User/models";
import { AxiosError } from "axios";
import { httpClient } from "../httpClient";

export const createUser = async (body: { name: string; password: string }): Promise<UserDto | AxiosError> => {
  const apiUrl = "/user";

  try {
    const response = await httpClient.post<UserDto>(apiUrl, body);
    return response.data;
  } catch (e) {
    return e as AxiosError;
  }
};
