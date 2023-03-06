import { httpClient } from "App/api/httpClient";
import { BoardDto, BoardCreateDto } from "App/entities/Board/models";
import { routes } from "../routes";

export const addBoard = async (body: BoardCreateDto): Promise<BoardDto | null> => {
  const apiUrl = routes.addBoard;

  try {
    const response = await httpClient.post<BoardDto>(apiUrl, body);
    return response.data;
  } catch (e) {
    return null;
  }
};
