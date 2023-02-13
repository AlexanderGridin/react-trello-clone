import { http } from "api/http";
import { BoardDto } from "App/entities/Board/Board";
import { AxiosError } from "axios";

export const getBoards = async (): Promise<BoardDto[]> => {
  const apiUrl = "/boards";

  try {
    const boards = await http.get<BoardDto[]>(apiUrl);
    return boards.data;
  } catch (e) {
    const error = e as AxiosError;
    console.log(error.message);
    return [];
  }
};

export const getFavoriteBoards = async (): Promise<BoardDto[]> => {
  const apiUrl = "/boards/favorite";

  try {
    const boards = await http.get<BoardDto[]>(apiUrl);
    return boards.data;
  } catch (e) {
    const error = e as AxiosError;
    console.log(error.message);
    return [];
  }
};
