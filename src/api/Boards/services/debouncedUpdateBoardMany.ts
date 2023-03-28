import { BoardDto, IBoardUpdateManyDto } from "App/entities/Board/models";
import { createCache, createDebouncedRequest, DebouncedRequestConfig } from "App/utils";

import { updateBoardManyAsync } from "./updateBoardManyAsync";

const cache = createCache<IBoardUpdateManyDto>("id");
const callDebouncedRequest = createDebouncedRequest<BoardDto[]>(1500, () =>
  updateBoardManyAsync(cache.getValuesAndClear())
);

type TConfig = { body: IBoardUpdateManyDto[] } & DebouncedRequestConfig<BoardDto[]>;

export const debouncedUpdateBoardMany = ({ body, beforeRequest, afterRequest }: TConfig): void => {
  cache.set(body);
  callDebouncedRequest({ beforeRequest, afterRequest });
};
