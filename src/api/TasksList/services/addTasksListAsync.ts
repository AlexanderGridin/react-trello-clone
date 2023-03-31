import { TasksListCreateDto, TasksListDto } from "entities/TasksList/models";

import { routes } from "../routes";
import { httpClient } from "../../httpClient";

export const addTasksListAsync = async (body: TasksListCreateDto): Promise<TasksListDto | null> => {
  const apiUrl = routes.addTasksList;

  try {
    const response = await httpClient.post(apiUrl, body);
    return response.data;
  } catch (e) {
    return null;
  }
};
