import { BoardDto } from "App/entities/Board/models";

import { routes } from "../routes";
import { httpClient } from "../../httpClient";

export const getFavoriteBoardsAsync = async (): Promise<BoardDto[]> => {
  const apiUrl = routes.getFavoriteBoards;

  try {
    const response = await httpClient.get<BoardDto[]>(apiUrl);
    return response.data;
  } catch (e) {
    return [];
  }
};
