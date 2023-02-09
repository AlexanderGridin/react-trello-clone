import { ChangeEvent, FormEvent, useReducer } from "react";
import { FormContainer } from "shared/components/Form/FormContainer";
import { Input } from "shared/components/Form/Input";
import { InputType } from "shared/enums/InputType";
import { useInputFocus } from "shared/hooks/useInputFocus";
import { AddItemFormFooter } from "./components/AddItemFormFooter";
import { AddItemFormValue } from "./models/AddItemFormValue";

type ChangeEventType = ChangeEvent<HTMLInputElement>;
type FormEventType = FormEvent<HTMLFormElement>;

export interface AddItemFormProps {
  placeholder?: string;
  onSubmit: (value: AddItemFormValue) => void;
  onCancel: () => void;
}

export const AddItemForm = ({
  placeholder = "",
  onSubmit,
  onCancel,
}: AddItemFormProps) => {
  const initialFormValue: AddItemFormValue = { text: "" };

  const [formValue, dispatch] = useReducer(
    (prevValue: AddItemFormValue, payload: Partial<AddItemFormValue>) => ({
      ...prevValue,
      ...payload,
    }),
    initialFormValue
  );

  const changeText = (e: ChangeEventType) => dispatch({ text: e.target.value });
  const cancel = () => onCancel();
  const add = () => onSubmit({ text: formValue.text });

  const submit = (e: FormEventType) => {
    e.preventDefault();
    add();
  };

  return (
    <FormContainer onSubmit={submit}>
      <Input
        name="text"
        type={InputType.Text}
        ref={useInputFocus()}
        value={formValue.text}
        placeholder={placeholder}
        onChange={changeText}
      />

      <AddItemFormFooter onAdd={add} onCancel={cancel} />
    </FormContainer>
  );
};
