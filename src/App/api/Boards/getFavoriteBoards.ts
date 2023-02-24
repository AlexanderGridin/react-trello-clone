import { BoardDto } from "App/entities/Board/Board";
import { http } from "../http";
import { routes } from "./routes";

export const getFavoriteBoards = async (): Promise<BoardDto[]> => {
  const apiUrl = routes.getFavoriteBoards;

  try {
    const response = await http.get<BoardDto[]>(apiUrl);
    return response.data;
  } catch (e) {
    return [];
  }
};
