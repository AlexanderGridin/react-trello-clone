import { BoardDto, IBoardUpdateDto } from "entities/Board/models";

import { routes } from "../routes";
import { httpClient } from "../../httpClient";

export const updateBoardAsync = async (id: string, body: IBoardUpdateDto): Promise<BoardDto | null> => {
  const apiUrl = routes.updateBoard.replace("{$boardId}", id);

  try {
    const response = await httpClient.put<BoardDto>(apiUrl, body);
    return response.data;
  } catch (e) {
    return null;
  }
};
