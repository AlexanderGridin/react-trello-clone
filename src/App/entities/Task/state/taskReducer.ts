import { AppAction } from "App/state/models/AppAction";
import { AppState } from "App/state/models/AppState";
import { addTaskReducer } from "./reducers/addTaskReducer";
import { moveTaskReducer } from "./reducers/moveTaskReducer";
import { removeTaskReducer } from "./reducers/removeTaskReducer";
import { updateTaskReducer } from "./reducers/updateTaskReducer";
import { TaskActionType } from "./TaskActionType.enum";

export const taskReducer = (state: AppState, action: AppAction): AppState => {
  switch (action.type) {
    case TaskActionType.AddTask:
      return addTaskReducer(state, action);

    case TaskActionType.RemoveTask:
      return removeTaskReducer(state, action);

    case TaskActionType.MoveTask:
      return moveTaskReducer(state, action);

    case TaskActionType.UpdateTask:
      return updateTaskReducer(state, action);

    default:
      return { ...state };
  }
};
