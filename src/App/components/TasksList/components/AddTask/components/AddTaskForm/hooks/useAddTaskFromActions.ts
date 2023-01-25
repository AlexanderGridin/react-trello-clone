import { ChangeEvent, FormEvent } from "react";
import { AddTaskFormProps } from "../AddTaskForm";
import { AddTaskFormState } from "./useAddTaskFormState";

type ChangeEventType = ChangeEvent<HTMLInputElement>;
type FormEventType = FormEvent<HTMLFormElement>;

export const useAddTaskFormActions = (
  props: AddTaskFormProps,
  state: AddTaskFormState
) => {
  const { onAdd, onCancel } = props;

  const changeContent = (e: ChangeEventType): void =>
    state.content.set(e.target.value);
  const submit = (e: FormEventType): void => {
    e.preventDefault();
    onAdd(state.content.value);
  };
  const add = (): void => onAdd(state.content.value);
  const cancel = (): void => onCancel();

  return { changeContent, submit, add, cancel };
};
