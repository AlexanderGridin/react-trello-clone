import { httpClient } from "App/api/httpClient";
import { TasksListDto, TasksListUpdateDto } from "App/entities/TasksList/models";
import { routes } from "../routes";

export const updateTasksList = async (id: string, body: TasksListUpdateDto): Promise<TasksListDto | null> => {
  const apiUrl = routes.updateTasksList.replace("{$tasksListId}", id);

  try {
    const response = await httpClient.put<TasksListDto>(apiUrl, body);
    return response.data;
  } catch (e) {
    return null;
  }
};
