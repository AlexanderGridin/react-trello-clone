import { BoardSimpleDto } from "App/entities/Board/BoardSimpleDto";
import { http } from "api/http";
import { AxiosError } from "axios";

export const getBoards = async (): Promise<BoardSimpleDto[]> => {
  const apiUrl = "/boards";

  try {
    const boards = await http.get<BoardSimpleDto[]>(apiUrl);
    return boards.data;
  } catch (e) {
    const error = e as AxiosError;
    console.log(error.message);
    return [];
  }
};

export const getFavoriteBoards = async (): Promise<BoardSimpleDto[]> => {
  const apiUrl = "/boards/favorite";

  try {
    const boards = await http.get<BoardSimpleDto[]>(apiUrl);
    return boards.data;
  } catch (e) {
    const error = e as AxiosError;
    console.log(error.message);
    return [];
  }
};
