import { useDispatch } from "store/hooks/useDispatch";
import { BoardViewModel } from "App/entities/Board/models";

import {
  addBoard as addBoardAction,
  removeBoard as removeBoardAction,
  updateBoard as updateBoardAction,
  setBoards as setBoardsAction,
  moveBoard as moveBoardAction,
  setIsShowFavorites as setIsShowFavoritesAction,
} from "..";

export const useBoardsDispatcher = () => {
  const dispatch = useDispatch();

  const addBoard = (board: BoardViewModel) => dispatch(addBoardAction({ board }));
  const removeBoard = (board: BoardViewModel) => dispatch(removeBoardAction({ board }));
  const updateBoard = (board: BoardViewModel) => dispatch(updateBoardAction({ board }));
  const setBoards = (boards: BoardViewModel[] | null) => dispatch(setBoardsAction({ boards }));

  const moveBoard = (boardToMove: BoardViewModel, boardToReplace: BoardViewModel) =>
    dispatch(moveBoardAction({ boardToMove, boardToReplace }));

  const setIsShowFavorites = (isShowFavorites: boolean) => dispatch(setIsShowFavoritesAction({ isShowFavorites }));

  return {
    addBoard,
    removeBoard,
    moveBoard,
    updateBoard,
    setBoards,
    setIsShowFavorites,
  };
};
