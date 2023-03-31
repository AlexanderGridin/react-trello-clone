import { TaskDto, TaskUpdateDto } from "entities/Task/models";

import { routes } from "../routes";
import { httpClient } from "../../httpClient";

export const updateTaskAsync = async (id: string, body: TaskUpdateDto): Promise<TaskDto | null> => {
  const apiUrl = routes.updateTask.replace("{$taskId}", id);

  try {
    const response = await httpClient.put(apiUrl, body);
    return response.data;
  } catch (e) {
    return null;
  }
};
