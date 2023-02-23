import { TasksListDto } from "App/entities/TasksList/TasksListDto";
import { http } from "../http";
import { routes } from "./routes";

export const removeTasksList = async (id: string): Promise<TasksListDto | null> => {
  const apiUrl = routes.removeTasksList.replace("{$tasksListId}", id);

  try {
    const response = await http.delete<TasksListDto>(apiUrl);
    return response.data;
  } catch (e) {
    return null;
  }
};
