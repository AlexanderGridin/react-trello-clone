import { createAction } from "App/state/utils/createAction";
import { ActionType } from "App/state/enums/ActionType.enum";

interface AddListActionPayload {
  title: string;
}

export const addList = (title: string) => {
  const { AddList } = ActionType;
  const payload: AddListActionPayload = {
    title,
  };

  return createAction<typeof AddList, AddListActionPayload>(AddList, payload);
};

export type AddListAction = ReturnType<typeof addList>;
