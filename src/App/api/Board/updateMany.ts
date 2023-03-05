import { BoardDto } from "App/entities/Board/models";
import { httpClient } from "../httpClient";
import { getRequestParams } from "../utils/getRequestParams";

export const updateMany = async (body: { id: string; rank: number }[]): Promise<BoardDto[]> => {
  const apiUrl = "/board/updateMany";

  try {
    const response = await httpClient.post<BoardDto[]>(apiUrl, body, getRequestParams());
    return response.data;
  } catch (e) {
    return [];
  }
};
