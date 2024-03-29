import { ITaskUpdateManyDto, TaskDto } from "entities/Task/models";

import { routes } from "../routes";
import { httpClient } from "../../httpClient";

export const updateTaskManyAsync = async (body: ITaskUpdateManyDto[]): Promise<TaskDto[]> => {
  const apiUrl = routes.updateTaskMany;

  try {
    const response = await httpClient.post<TaskDto[]>(apiUrl, body);
    return response.data;
  } catch (e) {
    return [];
  }
};
