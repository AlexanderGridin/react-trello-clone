import { TasksListDto } from "App/entities/TasksList/models";
import { httpClient } from "../httpClient";
import { routes } from "./routes";

export const addTasksList = async (body: { title: string; boardId: string }): Promise<TasksListDto | null> => {
  const apiUrl = routes.addTasksList;

  try {
    const response = await httpClient.post(apiUrl, body);
    return response.data;
  } catch (e) {
    return null;
  }
};
