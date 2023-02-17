import { AppActionType } from "App/state/enums/AppActionType.enum";
import { AppAction } from "App/state/models/AppAction";
import { AppState } from "App/state/models/AppState";
import { AddTaskAction } from "./action-creators/createAddTaskAction";
import { MoveTaskAction } from "./action-creators/createMoveTaskAction";
import { RemoveTaskAction } from "./action-creators/createRemoveTaskAction";
import { addTaskReducer } from "./reducers/addTaskReducer";
import { moveTaskReducer } from "./reducers/moveTaskReducer";
import { removeTaskReducer } from "./reducers/removeTaskReducer";

export * from "./hooks/useTaskDispatcher";
export type TaskAction = AddTaskAction | RemoveTaskAction | MoveTaskAction;
export type TaskModuleAction = { module: "Task" } & TaskAction;

export const taskReducer = (state: AppState, action: AppAction): AppState => {
  switch (action.type) {
    case AppActionType.AddTask:
      return addTaskReducer(state, action);

    case AppActionType.RemoveTask:
      return removeTaskReducer(state, action);

    case AppActionType.MoveTask:
      return moveTaskReducer(state, action);

    default:
      return { ...state };
  }
};
