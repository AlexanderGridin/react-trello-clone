import { UserDto } from "App/entities/User/models";
import MockAdapter from "axios-mock-adapter";
import { generateId } from "shared/utils/generateId";
import { logMockResponse } from "../utils/logMockResponse";

export const initUserMock = (adapter: MockAdapter) => {
  adapter.onGet(/\/user\//).reply((config) => {
    const id = config.url?.split("/")?.[2] ?? generateId();
    const user: UserDto = {
      _id: id,
      name: "Mock User",
    };

    logMockResponse({
      method: "GET",
      url: "/user/{$userId}".replace("{$userId}", id),
      response: user,
    });

    return [200, user];
  });
};
