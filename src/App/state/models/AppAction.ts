import { AppDraggedItemModuleAction } from "App/entities/AppDraggedItem/state";
import { BoardModuleAction } from "App/entities/Board/state";
import { TaskModuleAction } from "App/entities/Task/state";
import { TasksListModuleAction } from "App/entities/TasksList/state";
import { UserModuleAction } from "App/entities/User/state";

export type AppAction =
  | BoardModuleAction
  | TaskModuleAction
  | AppDraggedItemModuleAction
  | TasksListModuleAction
  | UserModuleAction;
