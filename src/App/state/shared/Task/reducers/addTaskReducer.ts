import { TasksListModel } from "App/components/Board/components/TasksList/models/TasksListModel";
import { generateId } from "shared/utils/generateId";
import { AppState } from "App/state/models/AppState";
import { AddTaskAction } from "../actions/addTask";

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
