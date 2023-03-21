import { BoardDto } from "App/entities/Board/models";
import { IBoardUpdateManyDto } from "App/entities/Board/models";
import { httpClient } from "App/api/httpClient";
import { routes } from "../routes";

export const updateBoardManyAsync = async (body: IBoardUpdateManyDto[]): Promise<BoardDto[]> => {
  const apiUrl = routes.updateMany;

  try {
    const response = await httpClient.post<BoardDto[]>(apiUrl, body);
    return response.data;
  } catch (e) {
    return [];
  }
};
