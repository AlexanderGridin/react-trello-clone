import { BoardDto, BoardCreateDto } from "entities/Board/models";

import { routes } from "../routes";
import { httpClient } from "../../httpClient";

export const addBoardAsync = async (body: BoardCreateDto): Promise<BoardDto | null> => {
  const apiUrl = routes.addBoard;

  try {
    const response = await httpClient.post<BoardDto>(apiUrl, body);
    return response.data;
  } catch (e) {
    return null;
  }
};
