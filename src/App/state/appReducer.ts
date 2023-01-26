import { AppState } from "./models/AppState";
import { AppAction } from "./models/AppAction";
import { setDraggedItemReducer } from "./shared/DraggedItem/reducers/setDraggedItemReducer";
import { addTasksListReducer } from "App/components/TasksList/state/reducers/addTasksListReducer";
import { removeTasksListReducer } from "App/components/TasksList/state/reducers/removeTasksListReducer";
import { moveTasksListReducer } from "App/components/TasksList/state/reducers/moveTaskListReducer";
import { addTaskReducer } from "App/components/Task/state/reducers/addTaskReducer";
import { removeTaskReducer } from "App/components/Task/state/reducers/removeTaskReducer";
import { moveTaskReducer } from "App/components/Task/state/reducers/moveTaskReducer";
import { pushTaskInTasksListReducer } from "App/components/TasksList/state/reducers/pushTaskInTasksListReducer";
import { AppActionType } from "./enums/AppActionType.enum";

export const appReducer = (state: AppState, action: AppAction): AppState => {
  switch (action.type) {
    case AppActionType.AddList:
      return addTasksListReducer(state, action);

    case AppActionType.RemoveList:
      return removeTasksListReducer(state, action);

    case AppActionType.MoveList:
      return moveTasksListReducer(state, action);

    case AppActionType.PushTaskInTasksList:
      return pushTaskInTasksListReducer(state, action);

    case AppActionType.AddTask:
      return addTaskReducer(state, action);

    case AppActionType.RemoveTask:
      return removeTaskReducer(state, action);

    case AppActionType.MoveTask:
      return moveTaskReducer(state, action);

    case AppActionType.SetDraggedItem:
      return setDraggedItemReducer(state, action);

    default:
      return { ...state };
  }
};
