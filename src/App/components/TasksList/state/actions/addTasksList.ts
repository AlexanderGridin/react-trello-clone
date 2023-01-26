import { createAction } from "App/state/utils/createAction";
import { ActionType } from "App/state/enums/ActionType.enum";
import { TasksListModel } from "../../models/TasksListModel";

interface AddTasksListActionPayload {
  list: TasksListModel;
}

export const addTasksList = (list: TasksListModel) => {
  const { AddList } = ActionType;
  const payload: AddTasksListActionPayload = {
    list,
  };

  return createAction<typeof AddList, AddTasksListActionPayload>(
    AddList,
    payload
  );
};

export type AddTasksListAction = ReturnType<typeof addTasksList>;
