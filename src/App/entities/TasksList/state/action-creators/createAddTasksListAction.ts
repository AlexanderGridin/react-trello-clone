import { Action } from "App/state/models/Action";
import { TasksListViewModel } from "../../models";
import { TasksListActionType } from "../TasksListActionType.enum";

interface AddTasksListActionPayload {
  list: TasksListViewModel;
}

export type AddTasksListAction = Action<TasksListActionType.AddList, AddTasksListActionPayload>;

export const createAddTasksListAction = (list: TasksListViewModel): AddTasksListAction => ({
  type: TasksListActionType.AddList,
  payload: { list },
});
