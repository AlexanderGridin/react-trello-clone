import { BoardDto } from "App/entities/Board/Board";
import { http } from "../http";
import { routes } from "./routes";

export const getAllBoards = async (): Promise<BoardDto[]> => {
  const apiUrl = routes.getAllBoards;

  try {
    const boards = await http.get<BoardDto[]>(apiUrl);
    return boards.data;
  } catch (e) {
    return [];
  }
};
