import { TasksListModel } from "App/components/Board/components/TasksList/models/TasksListModel";
import { generateId } from "shared/utils/generateId";
import { AddTaskAction } from "App/state/actions/task/addTask";
import { AppState } from "App/state/models/AppState";

export const addTaskReducer = (
  state: AppState,
  action: AddTaskAction
): AppState => {
  const tasksLists = state.tasksLists.map((list: TasksListModel) => {
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
