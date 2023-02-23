import { TasksListDto } from "App/entities/TasksList/TasksListDto";
import { http } from "../http";
import { routes } from "./routes";

export const addTasksList = async (body: { title: string; boardId: string }): Promise<TasksListDto | null> => {
  const apiUrl = routes.addTasksList;

  try {
    const response = await http.post(apiUrl, body);
    return response.data;
  } catch (e) {
    return null;
  }
};
