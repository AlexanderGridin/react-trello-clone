import { TasksListViewModel } from "App/entities/TasksList/TasksListViewModel";
import { Action } from "App/state/models/Action";
import { TasksListActionType } from "../TasksListActionType.enum";

interface RemoveTasksListActionPayload {
  list: TasksListViewModel;
}

export type RemoveTasksListAction = Action<TasksListActionType.RemoveList, RemoveTasksListActionPayload>;

export const createRemoveTasksListAction = (list: TasksListViewModel): RemoveTasksListAction => ({
  type: TasksListActionType.RemoveList,
  payload: { list },
});
