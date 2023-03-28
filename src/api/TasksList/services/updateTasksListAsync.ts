import { TasksListDto, TasksListUpdateDto } from "App/entities/TasksList/models";

import { routes } from "../routes";
import { httpClient } from "../../httpClient";

export const updateTasksListAsync = async (id: string, body: TasksListUpdateDto): Promise<TasksListDto | null> => {
  const apiUrl = routes.updateTasksList.replace("{$tasksListId}", id);

  try {
    const response = await httpClient.put<TasksListDto>(apiUrl, body);
    return response.data;
  } catch (e) {
    return null;
  }
};
