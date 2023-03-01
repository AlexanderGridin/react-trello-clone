import { BoardDto } from "App/entities/Board/models";
import { httpClient } from "../httpClient";
import { routes } from "./routes";

export const removeBoard = async (id: string): Promise<BoardDto | null> => {
  const apiUrl = routes.removeBoard.replace("{$boardId}", id);

  try {
    const response = await httpClient.delete(apiUrl);
    return response.data;
  } catch (e) {
    return null;
  }
};
