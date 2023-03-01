import { BoardDto } from "App/entities/Board/Board";
import { httpClient } from "../httpClient";
import { routes } from "./routes";

export const addBoard = async (body: {
  title: string;
  isFavorite: boolean;
  rank: number;
}): Promise<BoardDto | null> => {
  const apiUrl = routes.addBoard;

  try {
    const response = await httpClient.post<BoardDto>(apiUrl, body);
    return response.data;
  } catch (e) {
    return null;
  }
};
