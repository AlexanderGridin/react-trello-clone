import { TaskViewModel } from "App/entities/Task/models";
import { Action } from "App/state/models/Action";
import { TasksListViewModel } from "../../models";
import { TasksListActionType } from "../TasksListActionType.enum";

interface PushTaskInTasksListPayload {
  list: TasksListViewModel;
  task: TaskViewModel;
}

export type PushTaskInTasksListAction = Action<TasksListActionType.PushTaskInTasksList, PushTaskInTasksListPayload>;

export const createPushTaskInTasksListAction = (
  list: TasksListViewModel,
  task: TaskViewModel
): PushTaskInTasksListAction => ({
  type: TasksListActionType.PushTaskInTasksList,
  payload: { list, task },
});
