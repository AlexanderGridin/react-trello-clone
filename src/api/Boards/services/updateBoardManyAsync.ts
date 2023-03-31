import { BoardDto } from "entities/Board/models";
import { IBoardUpdateManyDto } from "entities/Board/models";

import { routes } from "../routes";
import { httpClient } from "../../httpClient";

export const updateBoardManyAsync = async (body: IBoardUpdateManyDto[]): Promise<BoardDto[]> => {
  const apiUrl = routes.updateMany;

  try {
    const response = await httpClient.post<BoardDto[]>(apiUrl, body);
    return response.data;
  } catch (e) {
    return [];
  }
};
