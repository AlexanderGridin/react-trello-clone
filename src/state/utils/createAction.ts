import { Action } from "state/models/Action.model";

export const createAction = <T, P>(type: T, payload: P): Action<T, P> => {
  return {
    type,
    payload,
  };
};