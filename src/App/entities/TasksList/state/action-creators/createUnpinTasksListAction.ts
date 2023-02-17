import { TasksListViewModel } from "App/entities/TasksList/TasksListViewModel";
import { AppActionType } from "App/state/enums/AppActionType.enum";
import { Action } from "App/state/models/Action";

interface UnpinTasksListActionPayload {
  list: TasksListViewModel;
}

export type UnpinTasksListAction = Action<
  AppActionType.UnpinList,
  UnpinTasksListActionPayload
>;

export const createUnpinTasksListAction = (
  list: TasksListViewModel
): UnpinTasksListAction => ({
  type: AppActionType.UnpinList,
  payload: { list },
});
