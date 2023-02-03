import { TasksListViewModel } from "App/entities/TasksList/TasksListViewModel";
import { AppActionType } from "App/state/enums/AppActionType.enum";
import { createAction } from "shared/state/utils/createAction";

interface PinTasksListActionPayload {
  list: TasksListViewModel;
}

export const pinTasksList = (list: TasksListViewModel) => {
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
