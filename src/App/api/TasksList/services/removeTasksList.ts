import { httpClient } from "App/api/httpClient";
import { TasksListDto } from "App/entities/TasksList/models";
import { routes } from "../routes";

export const removeTasksList = async (id: string): Promise<TasksListDto | null> => {
  const apiUrl = routes.removeTasksList.replace("{$tasksListId}", id);

  try {
    const response = await httpClient.delete<TasksListDto>(apiUrl);
    return response.data;
  } catch (e) {
    return null;
  }
};
