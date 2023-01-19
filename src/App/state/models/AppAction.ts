import { AddListAction } from "App/state/actions/list/addList";
import { RemoveListAction } from "App/state/actions/list/removeList";
import { AddTaskAction } from "App/state/actions/task/addTask";
import { RemoveTaskAction } from "App/state/actions/task/removeTask";
import { MoveListAction } from "../actions/list/moveList";
import { SetDraggedItemAction } from "../actions/setDraggedItem";

export type AppAction =
  | AddListAction
  | RemoveListAction
  | MoveListAction
  | AddTaskAction
  | RemoveTaskAction
  | SetDraggedItemAction;
