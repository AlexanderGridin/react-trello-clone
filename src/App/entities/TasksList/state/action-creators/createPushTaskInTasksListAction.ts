import { AppActionType } from "App/state/enums/AppActionType.enum";

import { TaskViewModel } from "App/entities/Task/TaskViewModel";
import { TasksListViewModel } from "App/entities/TasksList/TasksListViewModel";
import { Action } from "App/state/models/Action";

interface PushTaskInTasksListPayload {
  list: TasksListViewModel;
  task: TaskViewModel;
}

export type PushTaskInTasksListAction = Action<AppActionType.PushTaskInTasksList, PushTaskInTasksListPayload>;

export const createPushTaskInTasksListAction = (
  list: TasksListViewModel,
  task: TaskViewModel
): PushTaskInTasksListAction => ({
  type: AppActionType.PushTaskInTasksList,
  payload: { list, task },
});
