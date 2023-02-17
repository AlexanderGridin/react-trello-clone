import { TasksListDto } from "App/entities/TasksList/TasksListDto";
import { http } from "../http";
import { tasksListRoutes as routes } from "./tasksListRoutes";

export const addTasksList = async (body: {
  title: string;
  boardId: string;
}): Promise<TasksListDto | null> => {
  const apiUrl = routes.addTasksList;

  try {
    const tasksList = await http.post(apiUrl, body);
    return tasksList.data;
  } catch (e) {
    return null;
  }
};

export const removeTasksList = async (
  id: string
): Promise<TasksListDto | null> => {
  const apiUrl = routes.removeTasksList.replace("{$tasksListId}", id);

  try {
    const tasksList = await http.delete<TasksListDto>(apiUrl);
    return tasksList.data;
  } catch (e) {
    return null;
  }
};

export const updateTasksList = async (
  id: string,
  body: { isPinned: boolean }
): Promise<TasksListDto | null> => {
  const apiUrl = routes.updateTasksList.replace("{$tasksListId}", id);

  try {
    const tasksList = await http.put<TasksListDto>(apiUrl, body);
    return tasksList.data;
  } catch (e) {
    return null;
  }
};
