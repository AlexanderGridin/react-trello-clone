import { TaskCreateDto, TaskDto } from "App/entities/Task/models";

import { routes } from "../routes";
import { httpClient } from "../../httpClient";

export const addTaskAsync = async (body: TaskCreateDto): Promise<TaskDto | null> => {
  const apiUrl = routes.addTask;

  try {
    const response = await httpClient.post(apiUrl, body);
    return response.data;
  } catch (e) {
    return null;
  }
};
