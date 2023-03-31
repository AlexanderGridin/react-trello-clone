import { TaskDto } from "entities/Task/models";

import { routes } from "../routes";
import { httpClient } from "../../httpClient";

export const removeTaskAsync = async (id: string): Promise<TaskDto | null> => {
  const apiUrl = routes.removeTask.replace("{$taskId}", id);

  try {
    const response = await httpClient.delete(apiUrl);
    return response.data;
  } catch (e) {
    return null;
  }
};
