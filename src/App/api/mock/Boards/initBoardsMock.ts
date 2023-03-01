import MockAdapter from "axios-mock-adapter";
import { routes } from "App/api/Boards/routes";
import { logMockResponse } from "../utils/logMockResponse";
import { connectToMockDb } from "../mockDb";

const { boards } = connectToMockDb();

export const initBoardsMock = (adapter: MockAdapter) => {
  adapter.onGet(routes.getAllBoards).reply(() => {
    const apiUrl = routes.getAllBoards;
    const response = boards.getAll();

    logMockResponse({
      method: "GET",
      url: apiUrl,
      response,
    });

    return [200, response];
  });

  adapter.onGet(routes.getFavoriteBoards).reply(() => {
    const apiUrl = routes.getFavoriteBoards;
    const response = boards.getFavorite();

    logMockResponse({
      method: "GET",
      url: apiUrl,
      response,
    });

    return [200, response];
  });
};
