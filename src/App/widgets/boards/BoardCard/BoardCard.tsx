import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { DndCard } from "App/components/DndCard/DndCard";
import { Card } from "shared/components/Card/Card";
import { useBoardsPageDispatcher } from "App/store/Boards/hooks";
import { DraggedItemType } from "App/enums/DraggedItemType";

import {
  removeBoard as removeBoardFromApi,
  updateBoard as updateBoardOnApi,
  debouncedUpdateBoardMany,
} from "App/api/Boards/services";

import { BoardDto, BoardViewModel } from "App/entities/Board/models";
import { TAppDraggedItem } from "App/entities/AppDraggedItem/types";
import { Chip } from "shared/components/Chip/Chip";
import { useAppDraggedItemDispatcher } from "App/store/AppDraggedItem/hooks";

import { Board } from "../Board/Board";
import { BoardModal } from "../BoardMoal/BoardModal";
import style from "./BoardCard.module.css";

interface IBoardCardProps {
  board: BoardViewModel;
  isDragPreview?: boolean;
}

const MIN_HEIGHT = 150;

export const BoardCard = ({ board, isDragPreview = false }: IBoardCardProps) => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const dispatcher = useBoardsPageDispatcher();
  const draggetItemDispatcher = useAppDraggedItemDispatcher();

  const BACKGROUD_COLOR = board.isFavorite ? "#ebdcbd" : "#D8DEE9";

  const editBoard = (board: BoardViewModel) => dispatcher.updateBoard({ ...board, isEditing: true });

  const removeBoard = async (board: BoardViewModel) => {
    setIsLoading(true);

    const boardDto = await removeBoardFromApi(board.id);
    if (boardDto) {
      dispatcher.removeBoard(board);
    }

    setIsLoading(false);
  };

  const updateBoard = async (board: BoardViewModel) => {
    setIsLoading(true);

    const boardDto = await updateBoardOnApi(board.id, BoardViewModel.toUpdateDto(board));
    if (boardDto) {
      dispatcher.updateBoard(BoardDto.toViewModel(boardDto));
    }

    setIsLoading(false);
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
