import { TaskModel } from "App/components/Task/models/TaskModel";
import { TasksListModel } from "App/components/TasksList/models/TasksListModel";
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
      tasks: list.tasks.filter((task: TaskModel) => task.id !== taskId),
    };
  });

  return { ...state, tasksLists };
};
