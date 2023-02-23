import { BoardWithTasksListsDto } from "App/entities/Board/BoardWithTasksLists";
import { http } from "../http";
import { routes } from "./routes";

export const getBoard = async (id: string): Promise<BoardWithTasksListsDto | null> => {
  const apiUrl = routes.getBoard.replace("{$boardId}", id);

  try {
    const response = await http.get<BoardWithTasksListsDto>(apiUrl);
    return response.data;
  } catch (e) {
    return null;
  }
};
