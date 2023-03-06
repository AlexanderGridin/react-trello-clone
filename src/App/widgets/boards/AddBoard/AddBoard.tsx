import { useState } from "react";
import { Card } from "shared/components/Card/Card";
import { AddBoardButton } from "./components/AddBoardButton";
import { addBoard as addBoardToApi } from "App/api/Boards/services";
import { useAppState } from "App/state/hooks/useAppState";
import { BoardForm, BoardFormValue } from "../BoardForm/BoardForm";
import { BoardViewModel } from "App/entities/Board/models";
import { mapBoardDtoToViewModel } from "App/entities/Board/mappers";

export interface AddBoardProps {
  onAdd: (board: BoardViewModel) => void;
}

export const AddBoard = ({ onAdd }: AddBoardProps) => {
  const { user } = useAppState();
  const [isShowForm, setIsShowForm] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { boards } = useAppState();

  const showForm = () => setIsShowForm(true);
  const hideForm = () => setIsShowForm(false);

  const addBoard = async (formValue: BoardFormValue) => {
    setIsLoading(true);

    const boardDto = await addBoardToApi({
      ...formValue,
      rank: (boards?.length ?? -1) + 1,
      user: user?.id as string,
    });

    if (boardDto) {
      onAdd(mapBoardDtoToViewModel(boardDto));
      hideForm();
    }

    setIsLoading(false);
  };

  if (isShowForm) {
    return (
      <Card minHeight={150} backgroundColor="#D8DEE9" isLoading={isLoading}>
        <BoardForm onSubmit={addBoard} onCancel={hideForm} />
      </Card>
    );
  }

  return <AddBoardButton onClick={showForm}>+ Add board</AddBoardButton>;
};
