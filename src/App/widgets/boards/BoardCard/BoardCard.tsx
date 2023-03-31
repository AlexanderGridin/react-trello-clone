import { Card, Chip } from "@alexandergridin/rtc-components-lib";
import { useNavigate } from "react-router-dom";

import { DndCard } from "App/components/DndCard";
import { BoardDto, BoardViewModel } from "entities/Board/models";
import { useSwitch } from "shared/hooks";
import { TAppDraggedItem } from "entities/AppDraggedItem/types";
import { DraggedItemType } from "drag-and-drop/enums";
import { useBoardsDispatcher } from "store/Boards/hooks";
import { useAppDraggedItemDispatcher } from "store/AppDraggedItem/hooks";
import { removeBoardAsync, updateBoardAsync, debouncedUpdateBoardMany } from "api/Boards/services";

import { Board } from "../Board";
import { BoardModal } from "../BoardModal";

import style from "./BoardCard.module.css";

interface IBoardCardProps {
  board: BoardViewModel;
  isDragPreview?: boolean;
}

const MIN_HEIGHT = 150;

export const BoardCard = ({ board, isDragPreview = false }: IBoardCardProps) => {
  const navigate = useNavigate();
  const [isLoading, startLoading, endLoading] = useSwitch();
  const dispatcher = useBoardsDispatcher();
  const draggetItemDispatcher = useAppDraggedItemDispatcher();

  const BACKGROUD_COLOR = board.isFavorite ? "#ebdcbd" : "#D8DEE9";

  const editBoard = (board: BoardViewModel) => dispatcher.updateBoard({ ...board, isEditing: true });

  const removeBoard = async (board: BoardViewModel) => {
    startLoading();

    const boardDto = await removeBoardAsync(board.id);
    if (boardDto) {
      dispatcher.removeBoard(board);
    }

    endLoading();
  };

  const updateBoard = async (board: BoardViewModel) => {
    startLoading();

    const boardDto = await updateBoardAsync(board.id, BoardViewModel.toUpdateDto(board));
    if (boardDto) {
      dispatcher.updateBoard(BoardDto.toViewModel(boardDto));
    }

    endLoading();
  };

  const handleDrop = (draggedItem: TAppDraggedItem) => {
    if (draggedItem.type !== DraggedItemType.Board) {
      return;
    }

    draggetItemDispatcher.setAppDraggedItem({
      ...draggedItem,
      data: {
        ...draggedItem.data,
        rank: board.rank,
      },
    });

    const draggedBoard = { ...draggedItem.data, rank: board.rank };
    const targetBoard = { ...board, rank: draggedItem.data.rank };

    dispatcher.moveBoard(draggedBoard, targetBoard);

    const requestBody = [draggedBoard, targetBoard].map(BoardViewModel.toUpdateManyDto);
    debouncedUpdateBoardMany({
      body: requestBody,
    });
  };

  const openBoard = () => navigate(`/board/${board.id}`);

  const content = (
    <>
      <Board board={board} onEdit={editBoard} onRemove={removeBoard} onFavorite={updateBoard} />
      <Chip className={style.user}>{board.user.name}</Chip>
      <div style={{ color: "gray", position: "absolute", bottom: "15px", right: "15px" }}>{board.rank}</div>
    </>
  );

  if (isDragPreview || isLoading) {
    return (
      <Card
        isLoading={isLoading}
        className={`${isDragPreview ? "drag-preview" : ""}`}
        minHeight={MIN_HEIGHT}
        backgroundColor={BACKGROUD_COLOR}
      >
        {content}
      </Card>
    );
  }

  return (
    <>
      <DndCard
        minHeight={MIN_HEIGHT}
        draggedItem={BoardViewModel.toAppDraggedItem(board)}
        backgroundColor={BACKGROUD_COLOR}
        onDrop={handleDrop}
        onDoubleClick={openBoard}
      >
        {content}
      </DndCard>

      <BoardModal board={board} />
    </>
  );
};
