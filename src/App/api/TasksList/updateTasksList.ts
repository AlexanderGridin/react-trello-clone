import { TasksListDto } from "App/entities/TasksList/TasksListDto";
import { http } from "../http";
import { routes } from "./routes";

export const updateTasksList = async (
  id: string,
  body: { isPinned: boolean }
): Promise<TasksListDto | null> => {
  const apiUrl = routes.updateTasksList.replace("{$tasksListId}", id);

  try {
    const tasksList = await http.put<TasksListDto>(apiUrl, body);
    return tasksList.data;
  } catch (e) {
    return null;
  }
};
