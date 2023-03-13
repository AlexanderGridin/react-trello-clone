import { httpClient } from "App/api/httpClient";
import { AuthenticatedUserDto } from "App/entities/User/models/AuthenticatedUserDto";
import { routes } from "../routes";

export const checkAuth = async (): Promise<AuthenticatedUserDto> => {
  const apiUrl = routes.checkAuth;

  try {
    const response = await httpClient.get<AuthenticatedUserDto>(apiUrl);
    return response.data;
  } catch (e) {
    return { ...new AuthenticatedUserDto() };
  }
};
