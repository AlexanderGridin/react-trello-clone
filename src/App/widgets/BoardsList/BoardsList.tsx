import { BoardViewModel } from "App/entities/Board/BoardViewModel";
import { AddBoard } from "../AddBoard/AddBoard";
import style from "./BoardsList.module.css";
import { BoardsListItems } from "./components/BoardsListItems";
import { DragLayer } from "../DragLayer/DragLayer";
import { useBoardDispatchers } from "App/entities/Board/state/hooks/useBoardDispatchers";

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

      <BoardsListItems boards={boards} />

      {isShowAddBoard && (
        <div className={style.cell}>
          <AddBoard onAdd={addBoard} />
        </div>
      )}
    </div>
  );
};
