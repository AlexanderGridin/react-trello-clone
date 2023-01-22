import { ChangeEvent, FormEvent } from "react";
import { AddListFormProps } from "../AddListForm";
import { AddListFormState } from "./useAddListFormState";

type ChangeEventType = ChangeEvent<HTMLInputElement>;
type FormEventType = FormEvent<HTMLFormElement>;

export const useAddListFormActions = (
  props: AddListFormProps,
  state: AddListFormState
) => {
  const { onAdd, onCancel } = props;

  const changeTitle = (e: ChangeEventType): void =>
    state.title.set(e.target.value);
  const submit = (e: FormEventType) => {
    e.preventDefault();
    onAdd(state.title.value);
  };
  const add = () => onAdd(state.title.value);
  const cancel = () => onCancel();

  return { changeTitle, submit, add, cancel };
};
