import { TaskDto } from "App/entities/Task/TaskDto";
import { http } from "../http";
import { taskRoutes as routes } from "./taskRoutes";

export const addTask = async (body: {
  content: string;
  boardId: string;
  listId: string;
}): Promise<TaskDto | null> => {
  const apiUrl = routes.addTask;

  try {
    const response = await http.post(apiUrl, body);
    return response.data;
  } catch (e) {
    return null;
  }
};

export const removeTask = async (id: string): Promise<TaskDto | null> => {
  const apiUrl = routes.removeTask.replace("{$taskId}", id);

  try {
    const response = await http.delete(apiUrl);
    return response.data;
  } catch (e) {
    return null;
  }
};
