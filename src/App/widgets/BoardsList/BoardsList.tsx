import { BoardViewModel } from "App/entities/Board/BoardViewModel";
import { useBoardsListFeatures } from "./hooks/useBoardsListFeatures";
import { AddBoard } from "../AddBoard/AddBoard";
import style from "./BoardsList.module.css";
import { BoardsListItems } from "./components/BoardsListItems";
import { DragLayer } from "../DragLayer/DragLayer";

interface BoardsListProps {
  boards: BoardViewModel[];
  isShowAddBoard?: boolean;
}

export const BoardsList = ({
  boards,
  isShowAddBoard = true,
}: BoardsListProps) => {
  const { addBoard } = useBoardsListFeatures();

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
