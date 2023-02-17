import { AddBoard } from "../AddBoard/AddBoard";
import style from "./BoardsList.module.css";
import { DragLayer } from "../DragLayer/DragLayer";
import { useBoardDispatchers } from "App/entities/Board/state/hooks/useBoardDispatchers";
import { BoardViewModel } from "App/entities/Board/Board";
import { BoardCard } from "../BoardCard/BoardCard";

interface BoardsListProps {
  boards: BoardViewModel[];
  isShowAddBoard?: boolean;
}

export const BoardsList = ({
  boards,
  isShowAddBoard = true,
}: BoardsListProps) => {
  const { dispatchAddBoard } = useBoardDispatchers();

  const addBoard = (board: BoardViewModel) => dispatchAddBoard(board);

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
