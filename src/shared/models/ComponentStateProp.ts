import { UseStateSetter } from "./UseStateSetter";

export interface ComponentStateProp<T> {
  value: T;
  set: UseStateSetter<T>;
}
