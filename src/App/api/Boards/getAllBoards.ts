import { BoardDto } from "App/entities/Board/Board";
import { httpClient } from "../httpClient";
import { routes } from "./routes";

export const getAllBoards = async (): Promise<BoardDto[]> => {
  const apiUrl = routes.getAllBoards;

  try {
    const response = await httpClient.get<BoardDto[]>(apiUrl);
    return response.data;
  } catch (e) {
    return [];
  }
};
