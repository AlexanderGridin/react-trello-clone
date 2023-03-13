import { AddBoard } from "../AddBoard/AddBoard";
import style from "./BoardsCardsList.module.css";
import { useBoardsPageDispatcher } from "App/store/BoardsPage/hooks";
import { DragLayer } from "App/widgets/DragLayer/DragLayer";
import { BoardCard } from "../BoardCard/BoardCard";
import { BoardViewModel } from "App/entities/Board/models";

interface IBoardsCardsListProps {
  boards: BoardViewModel[];
  isShowAddBoard?: boolean;
}

export const BoardsCardsList = ({ boards, isShowAddBoard = true }: IBoardsCardsListProps) => {
  const dispatcher = useBoardsPageDispatcher();
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
