import { Modal } from "@alexandergridin/rtc-components-lib";

import { useSwitch } from "App/hooks";
import { updateBoardAsync } from "App/api/Boards/services";
import { useBoardsDispatcher } from "App/store/Boards/hooks";
import { BoardDto, BoardViewModel } from "App/entities/Board/models";

import { BoardForm } from "../BoardForm";
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

    const boardDto = await updateBoardAsync(board.id, BoardFormValue.toUpdateDto(formValue));
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
