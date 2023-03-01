import MockAdapter from "axios-mock-adapter";
import { routes } from "App/api/Boards/routes";
import { logMockResponse } from "../utils/logMockResponse";
import { connectToMockDb } from "../mockDb";

const { boards: boardsDb } = connectToMockDb();

export const initBoardsMock = (adapter: MockAdapter) => {
  adapter.onGet(routes.getAllBoards).reply(() => {
    const boards = boardsDb.getAll();

    logMockResponse({
      method: "GET",
      url: routes.getAllBoards,
      response: boards,
    });

    return [200, boards];
  });

  adapter.onGet(routes.getFavoriteBoards).reply(() => {
    const boards = boardsDb.getFavorite();

    logMockResponse({
      method: "GET",
      url: routes.getFavoriteBoards,
      response: boards,
    });

    return [200, boards];
  });
};
