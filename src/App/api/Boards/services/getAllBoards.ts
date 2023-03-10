import { httpClient } from "App/api/httpClient";
import { BoardDto } from "App/entities/Board/models";
import { routes } from "../routes";

export const getAllBoards = async (): Promise<BoardDto[]> => {
  const apiUrl = routes.getAllBoards;

  try {
    const response = await httpClient.get<BoardDto[]>(apiUrl);
    return response.data;
  } catch (e) {
    return [];
  }
};
