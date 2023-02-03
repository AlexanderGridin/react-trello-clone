import { TasksListViewModel } from "App/entities/TasksList/TasksListViewModel";
import { AppActionType } from "App/state/enums/AppActionType.enum";
import { createAction } from "shared/state/utils/createAction";

interface RemoveTasksListActionPayload {
  list: TasksListViewModel;
}

export const removeTasksList = (list: TasksListViewModel) => {
  const { RemoveList } = AppActionType;
  const payload: RemoveTasksListActionPayload = { list };

  return createAction<typeof RemoveList, RemoveTasksListActionPayload>(
    RemoveList,
    payload
  );
};

export type RemoveTasksListAction = ReturnType<typeof removeTasksList>;
