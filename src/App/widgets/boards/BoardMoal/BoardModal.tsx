import { Modal } from "shared/components/Modal/Modal";
import { useSwitch } from "App/hooks";
import { updateBoard as updateBoardOnApi } from "App/api/Boards/services";
import { useBoardsDispatcher } from "App/store/Boards/hooks";
import { BoardDto, BoardViewModel } from "App/entities/Board/models";

import { BoardForm } from "../BoardForm/BoardForm";
import { BoardFormValue } from "../BoardForm/models";

interface IBoardModalProps {
  board: BoardViewModel;
}

export const BoardModal = ({ board }: IBoardModalProps) => {
  const dispatcher = useBoardsDispatcher();
  const [isLoading, startLoading, endLoading] = useSwitch();

  const closeModal = () => dispatcher.updateBoard({ ...board, isEditing: false });
  const update = async (formValue: BoardFormValue) => {
    startLoading();

    const boardDto = await updateBoardOnApi(board.id, BoardFormValue.toUpdateDto(formValue));
    if (boardDto) {
      dispatcher.updateBoard(BoardDto.toViewModel(boardDto));
    }

    endLoading();
  };

  return (
    <Modal title="Edit board" isLoading={isLoading} open={board.isEditing} onClose={closeModal}>
      <BoardForm entity={BoardViewModel.toFormValue(board)} onSubmit={update} onCancel={closeModal} />
    </Modal>
  );
};
