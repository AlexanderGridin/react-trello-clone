import { BoardWithTasksListsDto } from "App/entities/Board/BoardWithTasksLists";
import { http } from "../http";
import { routes } from "./routes";

export const getBoard = async (id: string): Promise<BoardWithTasksListsDto> => {
  const apiUrl = routes.getBoard.replace("{$boardId}", id);

  try {
    const board = await http.get<BoardWithTasksListsDto>(apiUrl);
    return board.data;
  } catch (e) {
    return {} as BoardWithTasksListsDto;
  }
};
