import { ITasksListUpdateManyDto, TasksListDto } from "App/entities/TasksList/models";

import { routes } from "../routes";
import { httpClient } from "../../httpClient";

export const updateTasksListManyAsync = async (body: ITasksListUpdateManyDto[]): Promise<TasksListDto[]> => {
  const apiUrl = routes.updateTasksListMany;

  try {
    const response = await httpClient.post<TasksListDto[]>(apiUrl, body);
    return response.data;
  } catch (e) {
    return [];
  }
};
