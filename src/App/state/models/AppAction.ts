import { AddTasksListAction } from "App/components/Board/components/TasksList/state/actions/addTasksList";
import { MoveTasksListAction } from "App/components/Board/components/TasksList/state/actions/moveTasksList";
import { RemoveTasksListAction } from "App/components/Board/components/TasksList/state/actions/removeTasksList";
import { SetDraggedItemAction } from "../shared/DraggedItem/actions/setDraggedItem";
import { AddTaskAction } from "../shared/Task/actions/addTask";
import { RemoveTaskAction } from "../shared/Task/actions/removeTask";

export type AppAction =
  | AddTasksListAction
  | RemoveTasksListAction
  | MoveTasksListAction
  | AddTaskAction
  | RemoveTaskAction
  | SetDraggedItemAction;
