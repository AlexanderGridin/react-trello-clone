import { ChangeEvent, FormEvent } from "react";
import { AddItemFormProps } from "../AddItemForm";
import { AddItemFormState } from "../models/AddItemFormState";

type ChangeEventType = ChangeEvent<HTMLInputElement>;
type FormEventType = FormEvent<HTMLFormElement>;

export const useAddItemFormFeatures = (
  props: AddItemFormProps,
  state: AddItemFormState
) => {
  const { onAdd, onCancel } = props;

  const changeText = (e: ChangeEventType): void =>
    state.text.set(e.target.value);
  const submit = (e: FormEventType): void => {
    e.preventDefault();
    onAdd(state.text.value);
  };
  const add = (): void => onAdd(state.text.value);
  const cancel = (): void => onCancel();

  return { changeText, submit, add, cancel };
};
