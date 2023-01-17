import { TasksListModel } from "components/TasksList/models/TasksListModel";
import { Task } from "shared/models/Task";
import { RemoveTaskAction } from "state/actions/task/removeTask";
import { AppState } from "state/models/AppState";

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
