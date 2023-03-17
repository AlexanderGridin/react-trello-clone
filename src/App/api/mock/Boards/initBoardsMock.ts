import MockAdapter from "axios-mock-adapter";

import { routes } from "App/api/Boards/routes";
import { generateId } from "shared/utils";

import { logMockResponse } from "../utils/logMockResponse";
import { connectToMockDb } from "../mockDb";

const { boards: boardsDb, user: userDb } = connectToMockDb();

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

  adapter.onPost(routes.addBoard).reply((config) => {
    const board = {
      _id: generateId(),
      ...JSON.parse(config.data),
      user: userDb.get(),
    };

    boardsDb.push(board);

    logMockResponse({
      method: "POST",
      url: routes.addBoard,
      response: board,
    });

    return [200, board];
  });

  const urlRegExp = /\/boards\/[a-z0-9]/i;

  adapter.onGet(urlRegExp).reply((config) => {
    const id = config.url?.split("/")?.[2] ?? generateId();
    const board = boardsDb.getById(id);

    logMockResponse({
      method: "GET",
      url: routes.getBoard.replace("{$boardId}", id),
      response: board,
    });

    return [200, board];
  });

  adapter.onPut(urlRegExp).reply((config) => {
    const id = config.url?.split("/")?.[2] ?? generateId();
    const board = { ...boardsDb.getById(id), ...JSON.parse(config.data), user: userDb.get() };

    boardsDb.update(board);

    logMockResponse({
      method: "PUT",
      url: routes.updateBoard.replace("{$boardId}", id),
      response: board,
    });

    return [200, board];
  });

  adapter.onDelete(urlRegExp).reply((config) => {
    const id = config.url?.split("/")?.[2] ?? generateId();
    const board = boardsDb.getById(id);

    boardsDb.delete(board);

    logMockResponse({
      method: "DELETE",
      url: routes.removeBoard.replace("{$boardId}", id),
      response: board,
    });

    return [200, board];
  });
};
