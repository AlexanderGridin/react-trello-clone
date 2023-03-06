import { httpClient } from "App/api/httpClient";
import { TasksListCreateDto, TasksListDto } from "App/entities/TasksList/models";
import { routes } from "../routes";

export const addTasksList = async (body: TasksListCreateDto): Promise<TasksListDto | null> => {
  const apiUrl = routes.addTasksList;

  try {
    const response = await httpClient.post(apiUrl, body);
    return response.data;
  } catch (e) {
    return null;
  }
};
