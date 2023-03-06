import { BoardDto } from "App/entities/Board/models";
import { BoardUpdateManyDto } from "App/entities/Board/models";
import { httpClient } from "App/api/httpClient";
import { getRequestParams } from "App/api/utils/getRequestParams";
import { routes } from "../routes";

export const updateMany = async (body: BoardUpdateManyDto[]): Promise<BoardDto[]> => {
  const apiUrl = routes.updateMany;

  try {
    const response = await httpClient.post<BoardDto[]>(apiUrl, body, getRequestParams());
    return response.data;
  } catch (e) {
    return [];
  }
};