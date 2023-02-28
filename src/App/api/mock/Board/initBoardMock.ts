import MockAdapter from "axios-mock-adapter";
import { routes } from "App/api/Board/routes";
import { logMockResponse } from "../utils/logMockResponse";
import { generateId } from "shared/utils/generateId";

export const initBoardMock = (adapter: MockAdapter) => {
  adapter.onGet(/\/board\//).reply((config) => {
    const boardId = config.url?.split("/")?.[2] ?? generateId();
    const apiUrl = routes.getBoard.replace("{$boardId}", boardId);
    const response = { _id: boardId, title: `Board ${boardId}`, tasksLists: [], isFavorite: false };

    logMockResponse({
      method: "GET",
      url: apiUrl,
      response,
    });

    return [200, response];
  });

  adapter.onPost(/\/board/).reply((config) => {
    const apiUrl = routes.addBoard;
    const response = {
      _id: generateId(),
      ...JSON.parse(config.data),
    };

    logMockResponse({
      method: "POST",
      url: apiUrl,
      response,
    });

    return [200, response];
  });

  adapter.onPut(/\/board\//).reply((config) => {
    const boardId = config.url?.split("/")?.[2] ?? generateId();
    const apiUrl = routes.updateBoard.replace("{$boardId}", boardId);
    const response = { _id: boardId, ...JSON.parse(config.data) };

    logMockResponse({
      method: "PUT",
      url: apiUrl,
      response,
    });

    return [200, response];
  });

  adapter.onDelete(/\/board\//).reply((config) => {
    const boardId = config.url?.split("/")?.[2] ?? generateId();
    const apiUrl = routes.removeBoard.replace("{$boardId}", boardId);
    const response = { _id: boardId, title: `Board ${boardId}`, tasksLists: [], isFavorite: false };

    logMockResponse({
      method: "DELETE",
      url: apiUrl,
      response,
    });

    return [200, response];
  });
};
