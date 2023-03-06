import { httpClient } from "App/api/httpClient";
import { BoardDto } from "App/entities/Board/models";
import { routes } from "../routes";

export const addBoard = async (body: {
  title: string;
  isFavorite: boolean;
  rank: number;
  user: string;
}): Promise<BoardDto | null> => {
  const apiUrl = routes.addBoard;

  try {
    const response = await httpClient.post<BoardDto>(apiUrl, body);
    return response.data;
  } catch (e) {
    return null;
  }
};
