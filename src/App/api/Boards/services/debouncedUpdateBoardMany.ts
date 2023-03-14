import { BoardDto, IBoardUpdateManyDto } from "App/entities/Board/models";
import { createCache, createDebouncedRequest, DebouncedRequestConfig } from "App/utils";
import { updateBoardMany } from "App/api/Boards/services";

const cache = createCache<IBoardUpdateManyDto>("id");
const callDebouncedRequest = createDebouncedRequest<BoardDto[]>(1500, () => updateBoardMany(cache.getValuesAndClear()));

type TConfig = { body: IBoardUpdateManyDto[] } & DebouncedRequestConfig<BoardDto[]>;

export const debouncedUpdateBoardMany = ({ body, beforeRequest, afterRequest }: TConfig): void => {
  cache.set(body);
  callDebouncedRequest({ beforeRequest, afterRequest });
};
