import { BoardDto } from "App/entities/Board/Board";
import { http } from "../http";
import { routes } from "./routes";

export const addBoard = async (body: {
  title: string;
  rank: number;
}): Promise<BoardDto | null> => {
  const apiUrl = routes.addBoard;

  try {
    const board = await http.post<BoardDto>(apiUrl, body);
    return board.data;
  } catch (e) {
    return null;
  }
};
