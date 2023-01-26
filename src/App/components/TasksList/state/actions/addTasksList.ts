import { AppActionType } from "App/state/enums/AppActionType.enum";
import { createAction } from "shared/state/utils/createAction";
import { TasksListModel } from "../../models/TasksListModel";

interface AddTasksListActionPayload {
  list: TasksListModel;
}

export const addTasksList = (list: TasksListModel) => {
  const { AddList } = AppActionType;
  const payload: AddTasksListActionPayload = {
    list,
  };

  return createAction<typeof AddList, AddTasksListActionPayload>(
    AddList,
    payload
  );
};

export type AddTasksListAction = ReturnType<typeof addTasksList>;
