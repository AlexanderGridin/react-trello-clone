import { useBoardsPageDispatcher } from "App/store/BoardsPage/hooks";
import { useState } from "react";
import { Modal } from "shared/components/Modal/Modal";
import { BoardForm } from "../BoardForm/BoardForm";
import { updateBoard as updateBoardOnApi } from "App/api/Boards/services";
import { BoardDto, BoardViewModel } from "App/entities/Board/models";
import { BoardFormValue } from "../BoardForm/models";
import { mapBoardFormValueToUpdateDto } from "../BoardForm/mappers";

interface BoardModalProps {
  board: BoardViewModel;
}

export const BoardModal = ({ board }: BoardModalProps) => {
  const dispatcher = useBoardsPageDispatcher();
  const [isLoading, setIsLoading] = useState(false);

  const closeModal = () => dispatcher.updateBoard({ ...board, isEditing: false });
  const update = async (formValue: BoardFormValue) => {
    setIsLoading(true);

    const boardDto = await updateBoardOnApi(board.id, mapBoardFormValueToUpdateDto(formValue));

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
