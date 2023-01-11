import { useState } from "react";
import { AddItemButton } from "styles";
import { AddItemForm } from "components/AddItemForm";

interface AddItemProps {
  buttonText: string;
  dark?: boolean;
  // also can be written as
  // onAdd(text: string): void;
  onAdd: (text: string) => void;
}

export const AddItem = ({
  buttonText,
  dark = false,
  onAdd,
}: AddItemProps): JSX.Element => {
  // also can be written as const [isShowForm, setIsShowForm] = useState<boolean>(false);
  const [isShowForm, setIsShowForm] = useState(false);

  const addItem = (text: string): void => {
    onAdd(text);
    setIsShowForm(false);
  };
  const showForm = (): void => setIsShowForm(true);
  const hideForm = (): void => setIsShowForm(false);

  if (isShowForm) {
    return <AddItemForm onAdd={addItem} onCancel={hideForm}></AddItemForm>;
  }

  return (
    <AddItemButton dark={dark} onClick={showForm}>
      {buttonText}
    </AddItemButton>
  );
};