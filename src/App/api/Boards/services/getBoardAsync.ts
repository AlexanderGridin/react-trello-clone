import { httpClient } from "App/api/httpClient";
import { BoardWithTasksListsDto } from "App/entities/Board/models";
import { routes } from "../routes";

export const getBoardAsync = async (id: string): Promise<BoardWithTasksListsDto | null> => {
  const apiUrl = routes.getBoard.replace("{$boardId}", id);

  try {
    const response = await httpClient.get<BoardWithTasksListsDto>(apiUrl);
    return response.data;
  } catch (e) {
    return null;
  }
};
