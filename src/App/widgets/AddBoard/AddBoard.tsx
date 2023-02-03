import { AddItemForm } from "App/components/AddItemForm/AddItemForm";
import { BoardViewModel } from "App/entities/Board/BoardViewModel";
import { Card } from "shared/components/Card/Card";
import { AddBoardButton } from "./components/AddBoardButton";
import { useAddBoardFeatures } from "./hooks/useAddBoardFeatures";
import { useAddBoardState } from "./hooks/useAddBoardState";

export interface AddBoardProps {
  onAdd: (board: BoardViewModel) => void;
}

export const AddBoard = (props: AddBoardProps) => {
  const state = useAddBoardState();
  const { add, cancel, showForm } = useAddBoardFeatures(props, state);

  if (state.isShowForm.value) {
    return (
      <Card minHeight={150} backgroundColor="#D8DEE9">
        <AddItemForm onAdd={add} onCancel={cancel} />
      </Card>
    );
  }

  return <AddBoardButton onClick={showForm}>+ Add board</AddBoardButton>;
};
