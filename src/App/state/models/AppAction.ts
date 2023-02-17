import { SetAppDraggedItemAction } from "App/entities/AppDraggedItem/state/actions/setAppDraggedItem";
import { BoardModuleAction } from "App/entities/Board/state";
import { TaskModuleAction } from "App/entities/Task/state";
import { AddTasksListAction } from "App/entities/TasksList/state/actions/addTasksList";
import { MoveTasksListAction } from "App/entities/TasksList/state/actions/moveTasksList";
import { PinTasksListAction } from "App/entities/TasksList/state/actions/pinTasksList";
import { PushTaskInTasksListAction } from "App/entities/TasksList/state/actions/pushTaskInTasksList";
import { RemoveTasksListAction } from "App/entities/TasksList/state/actions/removeTasksList";
import { UnpinTasksListAction } from "App/entities/TasksList/state/actions/unpinTasksList";

export type AppAction =
  | BoardModuleAction
  | TaskModuleAction
  // TasksList
  | AddTasksListAction
  | RemoveTasksListAction
  | MoveTasksListAction
  | PushTaskInTasksListAction
  | PinTasksListAction
  | UnpinTasksListAction
  //DraggedItem
  | SetAppDraggedItemAction;
