import { useState } from "react";

import { useBoardsPageDispatcher } from "App/store/Boards/hooks";
import { Modal } from "shared/components/Modal/Modal";
import { updateBoard as updateBoardOnApi } from "App/api/Boards/services";
import { BoardDto, BoardViewModel } from "App/entities/Board/models";

import { BoardForm } from "../BoardForm/BoardForm";
import { BoardFormValue } from "../BoardForm/models";

interface IBoardModalProps {
  board: BoardViewModel;
}

export const BoardModal = ({ board }: IBoardModalProps) => {
  const dispatcher = useBoardsPageDispatcher();
  const [isLoading, setIsLoading] = useState(false);

  const closeModal = () => dispatcher.updateBoard({ ...board, isEditing: false });
  const update = async (formValue: BoardFormValue) => {
    setIsLoading(true);

    const boardDto = await updateBoardOnApi(board.id, BoardFormValue.toUpdateDto(formValue));
    if (boardDto) {
      dispatcher.updateBoard(BoardDto.toViewModel(boardDto));
    }

    setIsLoading(false);
  };

  return (
    <Modal title="Edit board" isLoading={isLoading} open={board.isEditing} onClose={closeModal}>
      <BoardForm entity={BoardViewModel.toFormValue(board)} onSubmit={update} onCancel={closeModal} />
    </Modal>
  );
};
