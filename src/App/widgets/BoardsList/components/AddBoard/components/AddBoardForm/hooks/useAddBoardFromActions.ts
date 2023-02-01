import { ChangeEvent, FormEvent } from "react";
import { AddBoardFormProps } from "../AddBoardForm";
import { AddBoardFormState } from "./useAddBoardFormState";

type ChangeEventType = ChangeEvent<HTMLInputElement>;
type FormEventType = FormEvent<HTMLFormElement>;

export const useAddBoardFormActions = (
  props: AddBoardFormProps,
  state: AddBoardFormState
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
