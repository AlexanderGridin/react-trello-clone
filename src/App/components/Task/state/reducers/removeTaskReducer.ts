import { TaskModel } from "App/components/Task/models/TaskModel";
import { TasksListModel } from "App/components/TasksList/models/TasksListModel";
import { AppState } from "App/state/models/AppState";
import { RemoveTaskAction } from "../actions/removeTask";

export const removeTaskReducer = (
  state: AppState,
  action: RemoveTaskAction
): AppState => {
  const taskToRemove: TaskModel = action.payload.task;

  const tasksLists = state.tasksLists.map((list: TasksListModel) => {
    if (list.id !== taskToRemove.listId) {
      return list;
    }

    return {
      ...list,
      tasks: list.tasks.filter(
        (task: TaskModel) => task.id !== taskToRemove.id
      ),
    };
  });

  return { ...state, tasksLists };
};
