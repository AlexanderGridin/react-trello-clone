import { TaskDto } from "App/entities/Task/models";
import { httpClient } from "../httpClient";
import { routes } from "./routes";

export const addTask = async (body: {
  content: string;
  boardId: string;
  listId: string;
  user: string;
}): Promise<TaskDto | null> => {
  const apiUrl = routes.addTask;

  try {
    const response = await httpClient.post(apiUrl, body);
    return response.data;
  } catch (e) {
    return null;
  }
};
