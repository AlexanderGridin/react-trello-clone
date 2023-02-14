import { BoardDto } from "App/entities/Board/Board";
import { BoardWithTasksListsDto } from "App/entities/Board/BoardWithTasksLists";
import { AxiosError } from "axios";
import { http } from "../http";

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

export const getBoard = async (id: string): Promise<BoardWithTasksListsDto> => {
  const apiUrl = "/board/{boardId}".replace("{boardId}", id);

  try {
    const board = await http.get<BoardWithTasksListsDto>(apiUrl);
    return board.data;
  } catch (e) {
    const error = e as AxiosError;
    console.log(error.message);
    return {} as BoardWithTasksListsDto;
  }
};
