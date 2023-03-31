import { BoardDto, IBoardUpdateManyDto } from "entities/Board/models";
import { createCache } from "shared/utils";

import { updateBoardManyAsync } from "./updateBoardManyAsync";
import { createDebouncedRequest, DebouncedRequestConfig } from "../../utils";

const cache = createCache<IBoardUpdateManyDto>("id");
const callDebouncedRequest = createDebouncedRequest<BoardDto[]>(1500, () =>
  updateBoardManyAsync(cache.getValuesAndClear())
);

type TConfig = { body: IBoardUpdateManyDto[] } & DebouncedRequestConfig<BoardDto[]>;

export const debouncedUpdateBoardMany = ({ body, beforeRequest, afterRequest }: TConfig): void => {
  cache.set(body);
  callDebouncedRequest({ beforeRequest, afterRequest });
};
