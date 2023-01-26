import { AppState } from "App/state/models/AppState";
import { AddTaskAction } from "../actions/addTask";
import { TasksListModel } from "App/components/TasksList/models/TasksListModel";
import { TaskModel } from "../../models/TaskModel";

export const addTaskReducer = (
  state: AppState,
  action: AddTaskAction
): AppState => {
  const taskToAdd: TaskModel = { ...action.payload.task };

  const tasksLists = state.tasksLists.map((list: TasksListModel) =>
    list.id !== taskToAdd.listId
      ? list
      : {
          ...list,
          tasks: [...list.tasks, taskToAdd],
        }
  );

  return { ...state, tasksLists };
};
