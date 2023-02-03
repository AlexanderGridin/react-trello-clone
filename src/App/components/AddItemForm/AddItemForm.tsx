import { FormContainer } from "shared/components/Form/FormContainer";
import { Input } from "shared/components/Form/Input";
import { InputType } from "shared/enums/InputType";
import { useInputFocus } from "shared/hooks/useInputFocus";
import { AddItemFormFooter } from "./components/AddItemFormFooter";
import { useAddItemFormFeatures } from "./hooks/useAddItemFormFeatures";
import { useAddItemFormState } from "./hooks/useAddItemFormState";

export interface AddItemFormProps {
  placeholder?: string;
  onAdd: (text: string) => void;
  onCancel: () => void;
}

export const AddItemForm = (props: AddItemFormProps) => {
  const state = useAddItemFormState();
  const { changeText, submit, add, cancel } = useAddItemFormFeatures(
    props,
    state
  );

  return (
    <FormContainer onSubmit={submit}>
      <Input
        name="text"
        type={InputType.Text}
        ref={useInputFocus()}
        value={state.text.value}
        placeholder={props.placeholder || ""}
        onChange={changeText}
      />

      <AddItemFormFooter onAdd={add} onCancel={cancel} />
    </FormContainer>
  );
};
