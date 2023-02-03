import { TasksListModel } from "App/entities/TasksList/TasksListModel";
import { AppActionType } from "App/state/enums/AppActionType.enum";
import { createAction } from "shared/state/utils/createAction";

interface PinTasksListActionPayload {
  list: TasksListModel;
}

export const pinTasksList = (list: TasksListModel) => {
  const { PinList } = AppActionType;
  const payload: PinTasksListActionPayload = {
    list,
  };

  return createAction<typeof PinList, PinTasksListActionPayload>(
    PinList,
    payload
  );
};

export type PinTasksListAction = ReturnType<typeof pinTasksList>;
