import { BoardDto } from "App/entities/Board/Board";
import { BoardWithTasksListsDto } from "App/entities/Board/BoardWithTasksLists";
import { AxiosError } from "axios";
import { http } from "../http";
import { boardsRoutes as routes } from "./boardsRoutes";

export const addBoard = async (body: {
  title: string;
  rank: number;
}): Promise<BoardDto | null> => {
  const apiUrl = routes.addBoard;

  try {
    const board = await http.post<BoardDto>(apiUrl, body);
    return board.data;
  } catch (e) {
    return null;
  }
};

export const removeBoard = async (id: string): Promise<BoardDto | null> => {
  const apiUrl = routes.removeBoard.replace("{$boardId}", id);

  try {
    const board = await http.delete(apiUrl);
    return board.data;
  } catch (e) {
    return null;
  }
};

export const getAllBoards = async (): Promise<BoardDto[]> => {
  const apiUrl = routes.getAllBoards;

  try {
    const boards = await http.get<BoardDto[]>(apiUrl);
    return boards.data;
  } catch (e) {
    // const error = e as AxiosError;
    // console.log(error.message);
    return [];
  }
};

export const getFavoriteBoards = async (): Promise<BoardDto[]> => {
  const apiUrl = routes.getFavoriteBoards;

  try {
    const boards = await http.get<BoardDto[]>(apiUrl);
    return boards.data;
  } catch (e) {
    // const error = e as AxiosError;
    // console.log(error.message);
    return [];
  }
};

export const getBoard = async (id: string): Promise<BoardWithTasksListsDto> => {
  const apiUrl = routes.getBoard.replace("{$boardId}", id);

  try {
    const board = await http.get<BoardWithTasksListsDto>(apiUrl);
    return board.data;
  } catch (e) {
    const error = e as AxiosError;
    console.log(error.message);
    return {} as BoardWithTasksListsDto;
  }
};
