import { BoardDto } from "App/entities/Board/Board";
import { http } from "../http";
import { routes } from "./routes";

export const getAllBoards = async (): Promise<BoardDto[]> => {
  const apiUrl = routes.getAllBoards;

  try {
    const response = await http.get<BoardDto[]>(apiUrl);
    return response.data;
  } catch (e) {
    return [];
  }
};
