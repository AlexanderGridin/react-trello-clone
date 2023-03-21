import { httpClient } from "App/api/httpClient";
import { BoardDto, IBoardUpdateDto } from "App/entities/Board/models";
import { routes } from "../routes";

export const updateBoardAsync = async (id: string, body: IBoardUpdateDto): Promise<BoardDto | null> => {
  const apiUrl = routes.updateBoard.replace("{$boardId}", id);

  try {
    const response = await httpClient.put<BoardDto>(apiUrl, body);
    return response.data;
  } catch (e) {
    return null;
  }
};
