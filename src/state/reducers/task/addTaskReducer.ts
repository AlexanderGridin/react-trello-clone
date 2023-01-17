import { TasksListModel } from "components/TasksList/models/TasksListModel";
import { generateId } from "shared/utils/generateId";
import { AddTaskAction } from "state/actions/task/addTask";
import { AppState } from "state/models/AppState";

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
