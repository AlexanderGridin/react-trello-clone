import { BoardDto } from "App/entities/Board/Board";
import { httpClient } from "../httpClient";
import { routes } from "./routes";

export const getFavoriteBoards = async (): Promise<BoardDto[]> => {
  const apiUrl = routes.getFavoriteBoards;

  try {
    const response = await httpClient.get<BoardDto[]>(apiUrl);
    return response.data;
  } catch (e) {
    return [];
  }
};
