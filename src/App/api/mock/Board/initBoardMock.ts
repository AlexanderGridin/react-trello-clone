import MockAdapter from "axios-mock-adapter";
import { routes } from "App/api/Board/routes";
import { logMockResponse } from "../utils/logMockResponse";
import { generateId } from "shared/utils/generateId";
import { connectToMockDb } from "../mockDb";

const { boards } = connectToMockDb();

export const initBoardMock = (adapter: MockAdapter) => {
  adapter.onGet(/\/board\//).reply((config) => {
    const id = config.url?.split("/")?.[2] ?? generateId();
    const board = boards.getById(id);

    logMockResponse({
      method: "GET",
      url: routes.getBoard.replace("{$boardId}", id),
      response: board,
    });

    return [200, board];
  });

  adapter.onPost(routes.addBoard).reply((config) => {
    const board = {
      _id: generateId(),
      ...JSON.parse(config.data),
    };

    boards.push(board);

    logMockResponse({
      method: "POST",
      url: routes.addBoard,
      response: board,
    });

    return [200, board];
  });

  adapter.onPut(/\/board\//).reply((config) => {
    const id = config.url?.split("/")?.[2] ?? generateId();
    const board = { ...boards.getById(id), ...JSON.parse(config.data) };

    boards.update(board);

    logMockResponse({
      method: "PUT",
      url: routes.updateBoard.replace("{$boardId}", id),
      response: board,
    });

    return [200, board];
  });

  adapter.onDelete(/\/board\//).reply((config) => {
    const id = config.url?.split("/")?.[2] ?? generateId();
    const board = boards.getById(id);

    boards.delete(board);

    logMockResponse({
      method: "DELETE",
      url: routes.removeBoard.replace("{$boardId}", id),
      response: board,
    });

    return [200, board];
  });
};
