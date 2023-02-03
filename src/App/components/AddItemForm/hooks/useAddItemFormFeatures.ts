import { ChangeEvent, FormEvent } from "react";
import { AddItemFormProps } from "../AddItemForm";
import { AddItemFormState } from "../models/AddItemFormState";

type ChangeEventType = ChangeEvent<HTMLInputElement>;
type FormEventType = FormEvent<HTMLFormElement>;

export const useAddItemFormFeatures = (
  props: AddItemFormProps,
  state: AddItemFormState
) => {
  const { onSubmit, onCancel } = props;

  const changeText = (e: ChangeEventType): void =>
    state.text.set(e.target.value);
  const submit = (e: FormEventType): void => {
    e.preventDefault();
    onSubmit({ text: state.text.value });
  };
  const add = (): void => onSubmit({ text: state.text.value });
  const cancel = (): void => onCancel();

  return { changeText, submit, add, cancel };
};
