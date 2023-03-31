import { UserDto } from "entities/User/models";

import { routes } from "../routes";
import { httpClient } from "../../httpClient";

export const deleteUserAsync = async (id: string): Promise<UserDto | null> => {
  const apiUrl = routes.deleteUser.replace("{$userId}", id);

  try {
    const response = await httpClient.delete<UserDto>(apiUrl);
    return response.data;
  } catch (e) {
    return null;
  }
};
