import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { DndCard } from "App/components/DndCard/DndCard";
import { Card } from "shared/components/Card/Card";
import { useBoardDispatcher } from "App/entities/Board/state/hooks/useBoardDispatcher";
import { DraggedItemType } from "App/enums/DraggedItemType";

import {
  removeBoard as removeBoardFromApi,
  updateBoard as updateBoardOnApi,
  debouncedUpdateMany,
} from "App/api/Boards/services";

import { Board } from "../Board/Board";
import { BoardModal } from "../BoardMoal/BoardModal";
import { BoardViewModel } from "App/entities/Board/models";

import {
  mapBoardDtoToViewModel,
  mapBoardViewModelToDraggedItem,
  mapBoardViewModelToUpdateDto,
} from "App/entities/Board/mappers";

import { AppDraggedItem } from "App/entities/AppDraggedItem/models";
import { Chip } from "shared/components/Chip/Chip";
import { useAppDraggedItemDispatcher } from "App/entities/AppDraggedItem/state";
import { mapBoardViewModelToUpdateManyDto } from "App/entities/Board/mappers";
import style from "./BoardCard.module.css";

interface BoardCardProps {
  board: BoardViewModel;
  isDragPreview?: boolean;
}

const MIN_HEIGHT = 150;

export const BoardCard = ({ board, isDragPreview = false }: BoardCardProps) => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const dispatcher = useBoardDispatcher();
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

    const boardDto = await updateBoardOnApi(board.id, mapBoardViewModelToUpdateDto(board));

    if (boardDto) {
      dispatcher.updateBoard(mapBoardDtoToViewModel(boardDto));
    }

    setIsLoading(false);
  };

  const dropOnBoard = (draggedItem: AppDraggedItem) => {
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

    const requestBody = [draggedBoard, targetBoard].map(mapBoardViewModelToUpdateManyDto);

    debouncedUpdateMany({
      body: requestBody,
    });
  };

  const navigateToBoard = () => navigate(`/board/${board.id}`);

  const content = (
    <>
      <Board board={board} onEdit={editBoard} onRemove={removeBoard} onFavorite={updateBoard} />
      <Chip className={style.user}>{board.user.name}</Chip>
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
        draggedItem={mapBoardViewModelToDraggedItem(board)}
        backgroundColor={BACKGROUD_COLOR}
        onDrop={dropOnBoard}
        onDoubleClick={navigateToBoard}
      >
        {content}
      </DndCard>

      <BoardModal board={board} />
    </>
  );
};
