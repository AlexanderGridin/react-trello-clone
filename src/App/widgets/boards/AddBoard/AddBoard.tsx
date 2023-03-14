import { useState } from "react";

import { Card } from "shared/components/Card/Card";
import { addBoard as addBoardToApi } from "App/api/Boards/services";
import { BoardCreateDto, BoardDto, BoardViewModel } from "App/entities/Board/models";
import { useSelectBoards } from "App/store/Boards/hooks";
import { useSelectUser } from "App/store/User/hooks";

import { AddBoardButton } from "./components/AddBoardButton";
import { BoardFormValue } from "../BoardForm/models";
import { BoardForm } from "../BoardForm/BoardForm";

export interface IAddBoardProps {
  onAdd: (board: BoardViewModel) => void;
}

export const AddBoard = ({ onAdd }: IAddBoardProps) => {
  const user = useSelectUser();
  const boards = useSelectBoards();

  const [isLoading, setIsLoading] = useState(false);
  const [isShowForm, setIsShowForm] = useState(false);

  const showForm = () => setIsShowForm(true);
  const hideForm = () => setIsShowForm(false);

  const addBoard = async (formValue: BoardFormValue) => {
    setIsLoading(true);

    const boardCreateDto = new BoardCreateDto({
      ...formValue,
      rank: (boards?.length ?? 0) + 1,
      user: user?.id as string,
    });

    const boardDto = await addBoardToApi(boardCreateDto);

    if (boardDto) {
      onAdd(BoardDto.toViewModel(boardDto));
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
