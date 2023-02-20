import { TaskDto } from "App/entities/Task/TaskDto";
import { http } from "../http";
import { routes } from "./routes";

export const updateTask = async (id: string, body: { content: string;}): Promise<TaskDto | null> => {
  const apiUrl = routes.updateTask.replace('{$taskId}', id);

  try {
    const response = await http.put(apiUrl, body);
    return response.data;
  } catch (e) {
    return null;
  }
};
