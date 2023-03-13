import { httpClient } from "App/api/httpClient";
import { UserDto } from "App/entities/User/models";
import { routes } from "../routes";

interface CheckAuthUserDto extends UserDto {
  accessToken: string;
}

export const checkAuth = async (): Promise<CheckAuthUserDto> => {
  const apiUrl = routes.checkAuth;

  try {
    const response = await httpClient.get<CheckAuthUserDto>(apiUrl);
    return response.data;
  } catch (e) {
    return e as any;
  }
};
