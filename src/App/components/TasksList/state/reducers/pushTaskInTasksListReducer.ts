import { AppState } from "App/state/models/AppState";
import { TasksListModel } from "../../models/TasksListModel";
import { PushTaskInTasksListAction } from "../actions/pushTaskInTasksList";

export const pushTaskInTasksListReducer = (
  state: AppState,
  action: PushTaskInTasksListAction
): AppState => {
  const { list, task } = action.payload;

  const listTasks = [...list.tasks];
  listTasks.push({
    ...task,
    listId: list.id,
  });

  const tasksLists = state.tasksLists.map((tasksList: TasksListModel) => {
    if (tasksList.id === list.id) {
      return {
        ...tasksList,
        tasks: listTasks,
      };
    }

    return tasksList;
  });

  return {
    ...state,
    tasksLists,
  };
};
