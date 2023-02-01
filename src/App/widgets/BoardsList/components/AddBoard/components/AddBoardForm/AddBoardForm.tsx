import { useInputFocus } from "shared/hooks/useInputFocus";
import { FormContainer } from "shared/components/Form/FormContainer";
import { Input } from "shared/components/Form/Input";
import { InputType } from "shared/enums/InputType";
import { AddBoardFormFooter } from "./components/AddBoardFormFooter";
import { useAddBoardFormState } from "./hooks/useAddBoardFormState";
import { useAddBoardFormActions } from "./hooks/useAddBoardFromActions";
import { Card } from "shared/components/Card/Card";

export interface AddBoardFormProps {
  onAdd: (content: string) => void;
  onCancel: () => void;
}

export const AddBoardForm = (props: AddBoardFormProps) => {
  const state = useAddBoardFormState();
  const { changeContent, submit, add, cancel } = useAddBoardFormActions(
    props,
    state
  );

  return (
    <Card minHeight={150} backgroundColor="#ffffff52">
      <FormContainer onSubmit={submit}>
        <Input
          name="task-content"
          type={InputType.Text}
          ref={useInputFocus()}
          value={state.content.value}
          placeholder="Enter board title"
          onChange={changeContent}
        />

        <AddBoardFormFooter onAdd={add} onCancel={cancel} />
      </FormContainer>
    </Card>
  );
};
