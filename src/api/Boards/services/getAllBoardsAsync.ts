import { BoardDto } from "entities/Board/models";

import { routes } from "../routes";
import { httpClient } from "../../httpClient";

export const getAllBoardsAsync = async (): Promise<BoardDto[]> => {
  const apiUrl = routes.getAllBoards;

  try {
    const response = await httpClient.get<BoardDto[]>(apiUrl);
    return response.data;
  } catch (e) {
    return [];
  }
};
