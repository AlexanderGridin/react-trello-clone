import { AppState } from "./models/AppState";
import { AppAction } from "./models/AppAction";
import { AppActionType } from "./enums/AppActionType.enum";
import { setAppDraggedItemReducer } from "App/entities/AppDraggedItem/state/reducers/setAppDraggedItemReducer";
import { boardReducer } from "App/entities/Board/state";
import { taskReducer } from "App/entities/Task/state";
import { tasksListReducer } from "App/entities/TasksList/state";

export const appReducer = (state: AppState, action: AppAction): AppState => {
  switch ((action as any).module) {
    case "Board":
      return boardReducer(state, action);

    case "Task":
      return taskReducer(state, action);

    case "TasksList":
      return tasksListReducer(state, action);
  }

  switch (action.type) {
    // DraggedItem
    case AppActionType.SetAppDraggedItem:
      return setAppDraggedItemReducer(state, action);

    default:
      return { ...state };
  }
};
