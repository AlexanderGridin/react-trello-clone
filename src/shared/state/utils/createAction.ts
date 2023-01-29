import { Action } from "../models/Action";

export const createAction = <T, P>(type: T, payload: P): Action<T, P> => ({
  type,
  payload,
});