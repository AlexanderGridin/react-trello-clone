import { TasksListModel } from "App/components/Board/components/TasksList/models/TasksListModel";
import { Task } from "App/models/Task";
import { AppState } from "App/state/models/AppState";
import { RemoveTaskAction } from "../actions/removeTask";

export const removeTaskReducer = (
  state: AppState,
  action: RemoveTaskAction
): AppState => {
  const listId = action.payload.listId;
  const taskId = action.payload.taskId;

  const tasksLists = state.tasksLists.map((list: TasksListModel) => {
    if (list.id !== listId) {
      return list;
    }

    return {
      ...list,
      tasks: list.tasks.filter((task: Task) => task.id !== taskId),
    };
  });

  return { ...state, tasksLists };
};
