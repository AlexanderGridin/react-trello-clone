import { AppState } from "./models/AppState";
import { AppAction } from "./models/AppAction";
import { boardReducer } from "App/entities/Board/state";
import { taskReducer } from "App/entities/Task/state";
import { tasksListReducer } from "App/entities/TasksList/state";
import { appDraggedItemReducer } from "App/entities/AppDraggedItem/state";
import { userReducer } from "App/entities/User/state";

export const appReducer = (state: AppState, action: AppAction): AppState => {
  switch (action.module) {
    case "User":
      return userReducer(state, action);

    case "Board":
      return boardReducer(state, action);

    case "Task":
      return taskReducer(state, action);

    case "TasksList":
      return tasksListReducer(state, action);

    case "AppDraggedItem":
      return appDraggedItemReducer(state, action);

    default:
      return { ...state };
  }
};
