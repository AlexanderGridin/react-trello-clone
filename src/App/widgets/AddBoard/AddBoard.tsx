import { AddItemForm } from "App/components/AddItemForm/AddItemForm";
import { AddItemFormValue } from "App/components/AddItemForm/models/AddItemFormValue";
import { BoardViewModel } from "App/entities/Board/BoardViewModel";
import { useState } from "react";
import { Card } from "shared/components/Card/Card";
import { AddBoardButton } from "./components/AddBoardButton";

export interface AddBoardProps {
  onAdd: (board: BoardViewModel) => void;
}

export const AddBoard = ({ onAdd }: AddBoardProps) => {
  const [isShowForm, setIsShowForm] = useState(false);

  const showForm = () => setIsShowForm(true);
  const hideForm = () => setIsShowForm(false);

  const addBoard = (formValue: AddItemFormValue) => {
    onAdd(new BoardViewModel({ title: formValue.text }));
    hideForm();
  };

  if (isShowForm) {
    return (
      <Card minHeight={150} backgroundColor="#D8DEE9">
        <AddItemForm onSubmit={addBoard} onCancel={hideForm} />
      </Card>
    );
  }

  return <AddBoardButton onClick={showForm}>+ Add board</AddBoardButton>;
};
