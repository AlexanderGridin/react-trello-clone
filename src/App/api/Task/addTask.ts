import { TaskDto } from "App/entities/Task/TaskDto";
import { http } from "../http";
import { routes } from "./routes";

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
