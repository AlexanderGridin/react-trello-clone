import { BoardDto } from "App/entities/Board/Board";
import { http } from "../http";
import { routes } from "./routes";

export const updateBoard = async (
  id: string,
  body: { title?: string; isFavorite?: boolean }
): Promise<BoardDto | null> => {
  const apiUrl = routes.updateBoard.replace("{$boardId}", id);

  try {
    const board = await http.put<BoardDto>(apiUrl, body);
    return board.data;
  } catch (e) {
    return null;
  }
};
