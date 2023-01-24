import { AddTaskAction } from "App/components/Task/state/actions/addTask";
import { MoveTaskAction } from "App/components/Task/state/actions/moveTask";
import { RemoveTaskAction } from "App/components/Task/state/actions/removeTask";
import { AddTasksListAction } from "App/components/TasksList/state/actions/addTasksList";
import { MoveTasksListAction } from "App/components/TasksList/state/actions/moveTasksList";
import { RemoveTasksListAction } from "App/components/TasksList/state/actions/removeTasksList";
import { SetDraggedItemAction } from "../shared/DraggedItem/actions/setDraggedItem";

export type AppAction =
  | AddTasksListAction
  | RemoveTasksListAction
  | MoveTasksListAction
  | AddTaskAction
  | RemoveTaskAction
  | MoveTaskAction
  | SetDraggedItemAction;
