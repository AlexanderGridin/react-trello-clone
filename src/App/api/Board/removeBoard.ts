import { BoardDto } from "App/entities/Board/Board";
import { http } from "../http";
import { routes } from "./routes";

export const removeBoard = async (id: string): Promise<BoardDto | null> => {
  const apiUrl = routes.removeBoard.replace("{$boardId}", id);

  try {
    const response = await http.delete(apiUrl);
    return response.data;
  } catch (e) {
    return null;
  }
};
