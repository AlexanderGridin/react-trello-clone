import { TasksListViewModel } from "App/entities/TasksList/TasksListViewModel";
import { AppActionType } from "App/state/enums/AppActionType.enum";
import { Action } from "App/state/models/Action";

interface PinTasksListActionPayload {
  list: TasksListViewModel;
}

export type PinTasksListAction = Action<AppActionType.PinList, PinTasksListActionPayload>;

export const createPinTasksListAction = (list: TasksListViewModel): PinTasksListAction => ({
  type: AppActionType.PinList,
  payload: { list },
});
