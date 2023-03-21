import { httpClient } from "App/api/httpClient";
import { ITaskUpdateManyDto, TaskDto } from "App/entities/Task/models";

import { routes } from "../routes";

export const updateTaskManyAsync = async (body: ITaskUpdateManyDto[]): Promise<TaskDto[]> => {
  const apiUrl = routes.updateTaskMany;

  try {
    const response = await httpClient.post<TaskDto[]>(apiUrl, body);
    return response.data;
  } catch (e) {
    return [];
  }
};
