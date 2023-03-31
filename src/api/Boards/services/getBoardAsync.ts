import { BoardWithTasksListsDto } from "entities/Board/models";

import { routes } from "../routes";
import { httpClient } from "../../httpClient";

export const getBoardAsync = async (id: string): Promise<BoardWithTasksListsDto | null> => {
  const apiUrl = routes.getBoard.replace("{$boardId}", id);

  try {
    const response = await httpClient.get<BoardWithTasksListsDto>(apiUrl);
    return response.data;
  } catch (e) {
    return null;
  }
};
