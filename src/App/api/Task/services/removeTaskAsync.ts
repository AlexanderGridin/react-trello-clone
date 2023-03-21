import { httpClient } from "App/api/httpClient";
import { TaskDto } from "App/entities/Task/models";
import { routes } from "../routes";

export const removeTaskAsync = async (id: string): Promise<TaskDto | null> => {
  const apiUrl = routes.removeTask.replace("{$taskId}", id);

  try {
    const response = await httpClient.delete(apiUrl);
    return response.data;
  } catch (e) {
    return null;
  }
};
