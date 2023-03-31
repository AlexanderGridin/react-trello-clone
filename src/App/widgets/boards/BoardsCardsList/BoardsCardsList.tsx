import { BoardViewModel } from "entities/Board/models";
import { useBoardsDispatcher } from "store/Boards/hooks";

import { AddBoard } from "../AddBoard";
import { DragLayer } from "../../../widgets/DragLayer";
import { BoardCard } from "../BoardCard";

import style from "./BoardsCardsList.module.css";

interface IBoardsCardsListProps {
  boards: BoardViewModel[];
  isShowAddBoard?: boolean;
}

export const BoardsCardsList = ({ boards, isShowAddBoard = true }: IBoardsCardsListProps) => {
  const dispatcher = useBoardsDispatcher();

  const addBoard = (board: BoardViewModel) => dispatcher.addBoard(board);

  return (
    <div className={style.container}>
      <DragLayer />

      {boards.length > 0 &&
        boards.map((board: BoardViewModel) => (
          <div className={`cell ${style.cell}`} key={board.id}>
            <BoardCard board={board} />
          </div>
        ))}

      {isShowAddBoard && (
        <div className={`cell ${style.cell}`}>
          <AddBoard onAdd={addBoard} />
        </div>
      )}
    </div>
  );
};
