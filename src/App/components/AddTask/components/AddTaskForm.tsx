import { ChangeEvent, KeyboardEvent, useState } from "react";
import { useInputFocus } from "shared/hooks/useInputFocus";
import { KeyboardKey } from "shared/enums/KeyboardKey.enum";
import { FormContainer, TextInput } from "styles";
import { AddTaskFormActions } from "./AddTaskFormActions";

interface AddTaskFormProps {
  onAdd: (text: string) => void;
  onCancel: () => void;
}

type ChangeEventType = ChangeEvent<HTMLInputElement>;
type KeyboardEventType = KeyboardEvent<HTMLInputElement>;

export const AddTaskForm = ({ onAdd, onCancel }: AddTaskFormProps) => {
  const [text, setText] = useState("");

  const onInputChange = (e: ChangeEventType): void => setText(e.target.value);
  const onInputKeyUp = (e: KeyboardEventType): void => {
    if (e.key !== KeyboardKey.Enter) {
      return;
    }

    onAdd(text);
  };
  const add = (): void => onAdd(text);
  const cancel = (): void => onCancel();

  return (
    <FormContainer>
      <TextInput
        ref={useInputFocus()}
        value={text}
        onChange={onInputChange}
        onKeyUp={onInputKeyUp}
      />

      <AddTaskFormActions onAdd={add} onCancel={cancel} />
    </FormContainer>
  );
};
