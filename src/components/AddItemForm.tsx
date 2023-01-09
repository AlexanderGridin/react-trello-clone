import { ChangeEvent, KeyboardEvent, useState } from "react";
import { useInputFocus } from "hooks/useInputFocus";
import { KeyboardKey } from "shared/enums/KeyboardKey.enum";
import { AddButton, AddItemFormContainer, AddItemInput } from "styles";

interface AddItemFormProps {
  onAdd: (text: string) => void;
}

type ChangeEventType = ChangeEvent<HTMLInputElement>;
type KeyboardEventType = KeyboardEvent<HTMLInputElement>;

export const AddItemForm = ({ onAdd }: AddItemFormProps) => {
  const [text, setText] = useState("");

  const onInputChange = (e: ChangeEventType): void => setText(e.target.value);
  const onInputKeyUp = (e: KeyboardEventType): void => {
    if (e.key !== KeyboardKey.Enter) {
      return;
    }

    onAdd(text);
  };
  const onAddButtonClick = (): void => onAdd(text);

  return (
    <AddItemFormContainer>
      <AddItemInput
        ref={useInputFocus()}
        value={text}
        onChange={onInputChange}
        onKeyUp={onInputKeyUp}
      />
      <AddButton onClick={onAddButtonClick}>Create</AddButton>
    </AddItemFormContainer>
  );
};
