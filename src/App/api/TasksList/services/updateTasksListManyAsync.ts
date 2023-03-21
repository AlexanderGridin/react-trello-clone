import { httpClient } from "App/api/httpClient";
import { ITasksListUpdateManyDto, TasksListDto } from "App/entities/TasksList/models";
import { routes } from "../routes";

export const updateTasksListManyAsync = async (body: ITasksListUpdateManyDto[]): Promise<TasksListDto[]> => {
  const apiUrl = routes.updateTasksListMany;

  try {
    const response = await httpClient.post<TasksListDto[]>(apiUrl, body);
    return response.data;
  } catch (e) {
    return [];
  }
};
