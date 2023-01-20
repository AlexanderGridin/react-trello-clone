import { ChangeEvent, KeyboardEvent, useState } from "react";
import { useInputFocus } from "shared/hooks/useInputFocus";
import { KeyboardKey } from "shared/enums/KeyboardKey.enum";
import { FormContainer } from "shared/components/Form/FormContainer";
import { TextInput } from "shared/components/Form/TextInput";
import { AddTaskFormFooter } from "./AddTaskFormFooter";

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
        placeholder="Enter task content"
        onChange={onInputChange}
        onKeyUp={onInputKeyUp}
      />

      <AddTaskFormFooter onAdd={add} onCancel={cancel} />
    </FormContainer>
  );
};
