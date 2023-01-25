import { useInputFocus } from "shared/hooks/useInputFocus";
import { FormContainer } from "shared/components/Form/FormContainer";
import { Input } from "shared/components/Form/Input";
import { InputType } from "shared/enums/InputType";
import { AddTaskFormFooter } from "./components/AddTaskFormFooter";
import { useAddTaskFormState } from "./hooks/useAddTaskFormState";
import { useAddTaskFormActions } from "./hooks/useAddTaskFromActions";

export interface AddTaskFormProps {
  onAdd: (content: string) => void;
  onCancel: () => void;
}

export const AddTaskForm = (props: AddTaskFormProps) => {
  const state = useAddTaskFormState();
  const { changeContent, submit, add, cancel } = useAddTaskFormActions(
    props,
    state
  );

  return (
    <FormContainer onSubmit={submit}>
      <Input
        name="task-content"
        type={InputType.Text}
        ref={useInputFocus()}
        value={state.content.value}
        placeholder="Enter task content"
        onChange={changeContent}
      />

      <AddTaskFormFooter onAdd={add} onCancel={cancel} />
    </FormContainer>
  );
};
