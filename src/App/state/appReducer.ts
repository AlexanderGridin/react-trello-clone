import { AppState } from "./models/AppState";
import { AppAction } from "./models/AppAction";
import { AppActionType } from "./enums/AppActionType.enum";
import { addTaskReducer } from "App/entities/Task/state/reducers/addTaskReducer";
import { removeTaskReducer } from "App/entities/Task/state/reducers/removeTaskReducer";
import { moveTaskReducer } from "App/entities/Task/state/reducers/moveTaskReducer";
import { addTasksListReducer } from "App/entities/TasksList/state/reducers/addTasksListReducer";
import { removeTasksListReducer } from "App/entities/TasksList/state/reducers/removeTasksListReducer";
import { moveTasksListReducer } from "App/entities/TasksList/state/reducers/moveTasksListReducer";
import { pushTaskInTasksListReducer } from "App/entities/TasksList/state/reducers/pushTaskInTasksListReducer";
import { pinTasksListReducer } from "App/entities/TasksList/state/reducers/pinTasksListReducer";
import { unpinTasksListReducer } from "App/entities/TasksList/state/reducers/unpinTasksListReducer";
import { setAppDraggedItemReducer } from "App/entities/AppDraggedItem/state/reducers/setAppDraggedItemReducer";
import { boardReducer } from "App/entities/Board/state";

export const appReducer = (state: AppState, action: AppAction): AppState => {
  switch ((action as any).module) {
    case "Board":
      return boardReducer(state, action);
  }
  switch (action.type) {
    // TasksList
    case AppActionType.AddList:
      return addTasksListReducer(state, action);

    case AppActionType.RemoveList:
      return removeTasksListReducer(state, action);

    case AppActionType.MoveList:
      return moveTasksListReducer(state, action);

    case AppActionType.PushTaskInTasksList:
      return pushTaskInTasksListReducer(state, action);

    case AppActionType.PinList:
      return pinTasksListReducer(state, action);

    case AppActionType.UnpinList:
      return unpinTasksListReducer(state, action);

    // Task
    case AppActionType.AddTask:
      return addTaskReducer(state, action);

    case AppActionType.RemoveTask:
      return removeTaskReducer(state, action);

    case AppActionType.MoveTask:
      return moveTaskReducer(state, action);

    // DraggedItem
    case AppActionType.SetAppDraggedItem:
      return setAppDraggedItemReducer(state, action);

    default:
      return { ...state };
  }
};
