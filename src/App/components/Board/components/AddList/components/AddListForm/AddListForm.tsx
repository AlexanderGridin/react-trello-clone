import { useInputFocus } from "shared/hooks/useInputFocus";
import { FormContainer } from "shared/components/Form/FormContainer";
import { Input } from "shared/components/Form/Input";
import { InputType } from "shared/enums/InputType";
import { AddListFormFooter } from "./components/AddListFormFooter";
import { useAddListFormState } from "./hooks/useAddListFormState";
import { useAddListFormActions } from "./hooks/useAddListFormActions";

export interface AddListFormProps {
  onAdd: (title: string) => void;
  onCancel: () => void;
}

export const AddListForm = (props: AddListFormProps) => {
  const state = useAddListFormState();
  const { changeTitle, submit, add, cancel } = useAddListFormActions(
    props,
    state
  );

  return (
    <FormContainer onSubmit={submit}>
      <Input
        name="title"
        type={InputType.Text}
        ref={useInputFocus()}
        value={state.title.value}
        placeholder="Enter list title"
        onChange={changeTitle}
      />

      <AddListFormFooter onAdd={add} onCancel={cancel} />
    </FormContainer>
  );
};
