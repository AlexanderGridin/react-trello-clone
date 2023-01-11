import { TasksList } from "shared/models/TasksList.model";
import { generateId } from "shared/utils/generateId";
import { AddTaskAction } from "state/actions/task/addTask";
import { AppState } from "state/models/AppState.model";

export const addTaskReducer = (
  state: AppState,
  action: AddTaskAction
): AppState => {
  const tasksLists = state.tasksLists.map((list: TasksList) => {
    if (list.id !== action.payload.listId) {
      return list;
    }

    return {
      ...list,
      tasks: [
        ...list.tasks,
        { id: generateId(), text: action.payload.content },
      ],
    };
  });

  return { ...state, tasksLists };
};
