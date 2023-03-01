import { useBoardDispatcher } from "App/entities/Board/state";
import { useState } from "react";
import { Modal } from "shared/components/Modal/Modal";
import { BoardForm, BoardFormValue } from "../BoardForm/BoardForm";
import { updateBoard as updateBoardOnApi } from "App/api/Board";
import { BoardViewModel } from "App/entities/Board/models";
import { mapBoardDtoToViewModel, mapBoardViewModelToBoardFormValue } from "App/entities/Board/mappers";

interface BoardModalProps {
  board: BoardViewModel;
}

export const BoardModal = ({ board }: BoardModalProps) => {
  const dispatcher = useBoardDispatcher();
  const [isLoading, setIsLoading] = useState(false);

  const closeModal = () => dispatcher.updateBoard({ ...board, isEditing: false });
  const update = async (formValue: BoardFormValue) => {
    setIsLoading(true);

    const boardDto = await updateBoardOnApi(board.id, {
      ...formValue,
    });

    if (boardDto) {
      dispatcher.updateBoard(mapBoardDtoToViewModel(boardDto));
    }

    setIsLoading(false);
  };

  return (
    <Modal title="Edit board" isLoading={isLoading} open={board.isEditing} onClose={closeModal}>
      <BoardForm entity={mapBoardViewModelToBoardFormValue(board)} onSubmit={update} onCancel={closeModal} />
    </Modal>
  );
};
