import { TaskDto } from "App/entities/Task/TaskDto";
import { http } from "../http";
import { routes } from "./routes";

export const removeTask = async (id: string): Promise<TaskDto | null> => {
  const apiUrl = routes.removeTask.replace("{$taskId}", id);

  try {
    const response = await http.delete(apiUrl);
    return response.data;
  } catch (e) {
    return null;
  }
};
