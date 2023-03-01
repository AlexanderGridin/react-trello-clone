import { BoardWithTasksListsDto } from "App/entities/Board/models";
import { httpClient } from "../httpClient";
import { routes } from "./routes";

export const getBoard = async (id: string): Promise<BoardWithTasksListsDto | null> => {
  const apiUrl = routes.getBoard.replace("{$boardId}", id);

  try {
    const response = await httpClient.get<BoardWithTasksListsDto>(apiUrl);
    return response.data;
  } catch (e) {
    return null;
  }
};
