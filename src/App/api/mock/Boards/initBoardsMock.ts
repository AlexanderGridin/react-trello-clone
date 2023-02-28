import MockAdapter from "axios-mock-adapter";
import { routes } from "App/api/Boards/routes";
import { boardsResponseMap as responseMap } from "./boardsResponseMap";
import { logMockResponse } from "../utils/logMockResponse";

export const initBoardsMock = (adapter: MockAdapter) => {
  adapter.onGet(routes.getAllBoards).reply(
    200,
    (() => {
      const apiUrl = routes.getAllBoards;
      const response = responseMap[apiUrl];

      logMockResponse({
        method: "GET",
        url: apiUrl,
        response,
      });

      return response;
    })()
  );

  adapter.onGet(routes.getFavoriteBoards).reply(
    200,
    (() => {
      const apiUrl = routes.getFavoriteBoards;
      const response = responseMap[apiUrl];

      logMockResponse({
        method: "GET",
        url: apiUrl,
        response,
      });

      return response;
    })()
  );
};
