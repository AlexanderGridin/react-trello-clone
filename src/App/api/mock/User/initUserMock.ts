import MockAdapter from "axios-mock-adapter";
import { UserDto } from "App/entities/User/models";
import { generateId } from "shared/utils/generateId";
import { logMockResponse } from "../utils/logMockResponse";
import { connectToMockDb } from "../mockDb";

const { user: userDb } = connectToMockDb();

export const initUserMock = (adapter: MockAdapter) => {
  adapter.onGet(/\/user\//).reply((config) => {
    const id = config.url?.split("/")?.[2] ?? generateId();
    const user: UserDto = {
      _id: id,
      name: "Mock User",
    };

    userDb.set(user);

    logMockResponse({
      method: "GET",
      url: "/user/{$userId}".replace("{$userId}", id),
      response: user,
    });

    return [200, user];
  });

  adapter.onPost("/user/login").reply((config) => {
    const id = generateId();
    const requestBody = JSON.parse(config.data);
    const user: UserDto = {
      _id: id,
      name: requestBody.name,
    };

    userDb.set(user);

    logMockResponse({
      method: "POST",
      url: "/user/login",
      response: user,
    });

    return [200, user];
  });
};
