import { httpClient } from "App/api/httpClient";
import { ITasksListUpdateManyDto, TasksListDto } from "App/entities/TasksList/models";

export const updateTasksListMany = async (body: ITasksListUpdateManyDto[]): Promise<TasksListDto[]> => {
  const apiUrl = "/tasks-lists/updateMany";

  try {
    const response = await httpClient.post<TasksListDto[]>(apiUrl, body);
    return response.data;
  } catch (e) {
    return [];
  }
};
