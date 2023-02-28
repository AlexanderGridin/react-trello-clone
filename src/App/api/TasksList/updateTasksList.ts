import { TasksListDto } from "App/entities/TasksList/TasksListDto";
import { httpClient } from "../httpClient";
import { routes } from "./routes";

export const updateTasksList = async (id: string, body: { isPinned: boolean }): Promise<TasksListDto | null> => {
  const apiUrl = routes.updateTasksList.replace("{$tasksListId}", id);

  try {
    const response = await httpClient.put<TasksListDto>(apiUrl, body);
    return response.data;
  } catch (e) {
    return null;
  }
};
