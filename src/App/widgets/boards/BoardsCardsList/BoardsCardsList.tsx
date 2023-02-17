import { AddBoard } from "../AddBoard/AddBoard";
import style from "./BoardsCardsList.module.css";
import { useBoardDispatcher } from "App/entities/Board/state/hooks/useBoardDispatcher";
import { BoardViewModel } from "App/entities/Board/Board";
import { DragLayer } from "App/widgets/DragLayer/DragLayer";
import { BoardCard } from "../BoardCard/BoardCard";

interface BoardsCardsListProps {
  boards: BoardViewModel[];
  isShowAddBoard?: boolean;
}

export const BoardsCardsList = ({
  boards,
  isShowAddBoard = true,
}: BoardsCardsListProps) => {
  const dispatcher = useBoardDispatcher();
  const addBoard = (board: BoardViewModel) => dispatcher.addBoard(board);

  return (
    <div className={style.container}>
      <DragLayer />

      {boards.length > 0 &&
        boards.map((board: BoardViewModel) => (
          <div className={`cell ${style.cell}`}>
            <BoardCard board={board} key={board.id} />
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
