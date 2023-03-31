import { TasksListDto } from "entities/TasksList/models";

import { routes } from "../routes";
import { httpClient } from "../../httpClient";

export const removeTasksListAsync = async (id: string): Promise<TasksListDto | null> => {
  const apiUrl = routes.removeTasksList.replace("{$tasksListId}", id);

  try {
    const response = await httpClient.delete<TasksListDto>(apiUrl);
    return response.data;
  } catch (e) {
    return null;
  }
};
