import { ChangeEvent, KeyboardEvent, useState } from "react";
import { useInputFocus } from "hooks/useInputFocus";
import { KeyboardKey } from "shared/enums/KeyboardKey.enum";
import {
  SuccessButton,
  AddItemFormContainer,
  AddItemInput,
  ErrorButton,
  FlexContainer,
} from "styles";

interface AddItemFormProps {
  onAdd: (text: string) => void;
  onCancel: () => void;
}

type ChangeEventType = ChangeEvent<HTMLInputElement>;
type KeyboardEventType = KeyboardEvent<HTMLInputElement>;

export const AddItemForm = ({ onAdd, onCancel }: AddItemFormProps) => {
  const [text, setText] = useState("");

  const onInputChange = (e: ChangeEventType): void => setText(e.target.value);
  const onInputKeyUp = (e: KeyboardEventType): void => {
    if (e.key !== KeyboardKey.Enter) {
      return;
    }

    onAdd(text);
  };
  const addItem = (): void => onAdd(text);
  const cancel = (): void => onCancel();

  return (
    <AddItemFormContainer>
      <AddItemInput
        ref={useInputFocus()}
        value={text}
        onChange={onInputChange}
        onKeyUp={onInputKeyUp}
      />

      <FlexContainer>
        <SuccessButton onClick={addItem}>Add</SuccessButton>
        <ErrorButton onClick={cancel}>Cancel</ErrorButton>
      </FlexContainer>
    </AddItemFormContainer>
  );
};
