import { AppAction } from "App/state/models/AppAction";
import { AppState } from "App/state/models/AppState";
import { addTasksListReducer } from "./reducers/addTasksListReducer";
import { moveTasksListReducer } from "./reducers/moveTasksListReducer";
import { pushTaskInTasksListReducer } from "./reducers/pushTaskInTasksListReducer";
import { removeTasksListReducer } from "./reducers/removeTasksListReducer";
import { updateTasksListReducer } from "./reducers/updateTasksListReducer";
import { TasksListActionType } from "./TasksListActionType.enum";

export const tasksListReducer = (state: AppState, action: AppAction): AppState => {
  switch (action.type) {
    case TasksListActionType.AddList:
      return addTasksListReducer(state, action);

    case TasksListActionType.RemoveList:
      return removeTasksListReducer(state, action);

    case TasksListActionType.MoveList:
      return moveTasksListReducer(state, action);

    case TasksListActionType.PushTaskInTasksList:
      return pushTaskInTasksListReducer(state, action);

    case TasksListActionType.UpdateList:
      return updateTasksListReducer(state, action);

    default:
      return { ...state };
  }
};
