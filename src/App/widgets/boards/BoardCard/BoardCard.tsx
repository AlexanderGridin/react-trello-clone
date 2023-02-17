import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { DndCard } from "App/components/DndCard/DndCard";
import { Card } from "shared/components/Card/Card";
import { useBoardDispatchers } from "App/entities/Board/state/hooks/useBoardDispatchers";
import { AppDraggedItem } from "App/entities/AppDraggedItem/AppDraggedItem";
import { DraggedItemType } from "App/enums/DraggedItemType";

import {
  BoardViewModel,
  mapBoardDtoToViewModel,
  mapBoardToDraggedItem,
} from "App/entities/Board/Board";

import {
  removeBoard as removeBoardFromApi,
  updateBoard as updateBoardOnApi,
} from "App/api/Board";
import { Board } from "../Board/Board";

interface BoardCardProps {
  board: BoardViewModel;
  isDragPreview?: boolean;
}

const MIN_HEIGHT = 150;
const BACKGROUD_COLOR = "#D8DEE9";

export const BoardCard = ({ board, isDragPreview = false }: BoardCardProps) => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const { dispatchMoveBoard, dispatchRemoveBoard, dispatchUpdateBoard } =
    useBoardDispatchers();

  const removeBoard = async (board: BoardViewModel) => {
    setIsLoading(true);

    const boardDto = await removeBoardFromApi(board.id);

    if (boardDto) {
      dispatchRemoveBoard(board);
    }

    setIsLoading(false);
  };

  const updateBoard = async (board: BoardViewModel) => {
    setIsLoading(true);

    const boardDto = await updateBoardOnApi(board.id, {
      isFavorite: board.isFavorite,
    });

    if (boardDto) {
      dispatchUpdateBoard(mapBoardDtoToViewModel(boardDto));
    }

    setIsLoading(false);
  };

  const dropOnBoard = (draggedItem: AppDraggedItem) => {
    if (draggedItem.type !== DraggedItemType.Board) {
      return;
    }

    const draggedBoard = draggedItem.data;
    dispatchMoveBoard(draggedBoard, board);
  };

  const navigateToBoard = () => navigate(`/board/${board.id}`);

  if (isDragPreview || isLoading) {
    return (
      <Card
        isLoading={isLoading}
        className={`${isDragPreview ? "drag-preview" : ""}`}
        minHeight={MIN_HEIGHT}
        backgroundColor={BACKGROUD_COLOR}
      >
        <Board board={board} onRemove={removeBoard} onFavorite={updateBoard} />
      </Card>
    );
  }

  return (
    <DndCard
      minHeight={MIN_HEIGHT}
      draggedItem={mapBoardToDraggedItem(board)}
      backgroundColor={BACKGROUD_COLOR}
      onDrop={dropOnBoard}
      onDoubleClick={navigateToBoard}
    >
      <Board board={board} onRemove={removeBoard} onFavorite={updateBoard} />
    </DndCard>
  );
};
