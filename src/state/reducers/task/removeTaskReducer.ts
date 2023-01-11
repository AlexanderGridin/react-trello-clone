import { Task } from "shared/models/Task.model";
import { TasksList } from "shared/models/TasksList.model";
import { RemoveTaskAction } from "state/actions/task/removeTask";
import { AppState } from "state/models/AppState.model";

export const removeTaskReducer = (
  state: AppState,
  action: RemoveTaskAction
): AppState => {
  const listId = action.payload.listId;
  const taskId = action.payload.taskId;

  const tasksLists = state.tasksLists.map((list: TasksList) => {
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
