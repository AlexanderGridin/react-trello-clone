import { TasksListDto } from "App/entities/TasksList/models";
import { httpClient } from "../httpClient";
import { routes } from "./routes";

export const updateTasksList = async (
  id: string,
  body: { title: string; isPinned: boolean; boardId: string }
): Promise<TasksListDto | null> => {
  const apiUrl = routes.updateTasksList.replace("{$tasksListId}", id);

  try {
    const response = await httpClient.put<TasksListDto>(apiUrl, body);
    return response.data;
  } catch (e) {
    return null;
  }
};
