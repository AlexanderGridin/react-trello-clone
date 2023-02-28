import MockAdapter from "axios-mock-adapter";
import { routes } from "App/api/Boards/routes";
import { boardsResponseMap as responseMap } from "./boardsResponseMap";
import { logMockResponse } from "../utils/logMockResponse";

export const initBoardsMock = (adapter: MockAdapter) => {
  adapter.onGet(routes.getAllBoards).reply(() => {
    const apiUrl = routes.getAllBoards;
    const response = responseMap[apiUrl];

    logMockResponse({
      method: "GET",
      url: apiUrl,
      response,
    });

    return [200, response];
  });

  adapter.onGet(routes.getFavoriteBoards).reply(() => {
    const apiUrl = routes.getFavoriteBoards;
    const response = responseMap[apiUrl];

    logMockResponse({
      method: "GET",
      url: apiUrl,
      response,
    });

    return [200, response];
  });
};
