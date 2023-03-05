import { debounce } from "throttle-debounce";
import { BoardDto, BoardViewModel } from "App/entities/Board/models";
import { updateMany } from "../Board/updateMany";
import { Cache } from "shared/models/Cache";

const boardsCache = new Cache<BoardViewModel>();

const debouncedRequest = debounce(
  1000,
  async (beforeRequest?: () => void, afterRequest?: (dtos: BoardDto[]) => void) => {
    const boards = boardsCache.value;
    console.log(boards.map(({ title, rank }: BoardViewModel) => ({ title, rank })));

    beforeRequest?.();
    const response = await updateMany(boards.map((board) => ({ id: board.id, rank: board.rank })));
    afterRequest?.(response as any);

    boardsCache.clear();
  }
);

interface Config {
  boards: BoardViewModel[];
  beforeRequest?: () => void;
  afterRequest?: (dtos: BoardDto[]) => void;
}

export const saveBoardsDropResults = ({ boards, beforeRequest, afterRequest }: Config): void => {
  boards.forEach((board: BoardViewModel) => {
    boardsCache.add(board.id, { ...board });
  });

  debouncedRequest(beforeRequest, afterRequest);
};
