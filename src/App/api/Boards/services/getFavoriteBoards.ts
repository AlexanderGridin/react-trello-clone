import { httpClient } from "App/api/httpClient";
import { getRequestParams } from "App/api/utils/getRequestParams";
import { BoardDto } from "App/entities/Board/models";
import { routes } from "../routes";

export const getFavoriteBoards = async (): Promise<BoardDto[]> => {
  const apiUrl = routes.getFavoriteBoards;

  try {
    const response = await httpClient.get<BoardDto[]>(apiUrl, getRequestParams());
    return response.data;
  } catch (e) {
    return [];
  }
};
