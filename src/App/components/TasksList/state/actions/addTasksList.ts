import { createAction } from "App/state/utils/createAction";
import { ActionType } from "App/state/enums/ActionType.enum";

interface AddTasksListActionPayload {
  title: string;
}

export const addTasksList = (title: string) => {
  const { AddList } = ActionType;
  const payload: AddTasksListActionPayload = {
    title,
  };

  return createAction<typeof AddList, AddTasksListActionPayload>(
    AddList,
    payload
  );
};

export type AddTasksListAction = ReturnType<typeof addTasksList>;
