import { TaskDto } from "App/entities/Task/TaskDto";
import { httpClient } from "../httpClient";
import { routes } from "./routes";

export const removeTask = async (id: string): Promise<TaskDto | null> => {
  const apiUrl = routes.removeTask.replace("{$taskId}", id);

  try {
    const response = await httpClient.delete(apiUrl);
    return response.data;
  } catch (e) {
    return null;
  }
};
