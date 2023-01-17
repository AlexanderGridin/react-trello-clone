import { ChangeEvent, KeyboardEvent, useState } from "react";
import { useInputFocus } from "shared/hooks/useInputFocus";
import { KeyboardKey } from "shared/enums/KeyboardKey.enum";
import { FormContainer, TextInput } from "styles";
import { AddListFormActions } from "App/components/AddList/components/AddListFormActions";

interface AddListFormProps {
  onAdd: (text: string) => void;
  onCancel: () => void;
}

type ChangeEventType = ChangeEvent<HTMLInputElement>;
type KeyboardEventType = KeyboardEvent<HTMLInputElement>;

export const AddListForm = ({ onAdd, onCancel }: AddListFormProps) => {
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

      <AddListFormActions onAdd={add} onCancel={cancel} />
    </FormContainer>
  );
};
