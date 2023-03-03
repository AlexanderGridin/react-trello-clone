import { BoardDto } from "App/entities/Board/models";
import { httpClient } from "../httpClient";
import { getRequestParams } from "../utils/getRequestParams";
import { routes } from "./routes";

export const getAllBoards = async (): Promise<BoardDto[]> => {
  const apiUrl = routes.getAllBoards;

  try {
    const response = await httpClient.get<BoardDto[]>(apiUrl, getRequestParams());
    return response.data;
  } catch (e) {
    return [];
  }
};
