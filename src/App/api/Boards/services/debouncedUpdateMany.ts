import { BoardDto, IBoardUpdateManyDto } from "App/entities/Board/models";
import { createCache, createDebouncedRequest, DebouncedRequestConfig } from "App/utils";
import { updateMany } from "App/api/Boards/services/updateMany";

const cache = createCache<IBoardUpdateManyDto>("id");
const callDebouncedRequest = createDebouncedRequest<BoardDto[]>(1000, () => updateMany(cache.getValuesAndClear()));

type TConfig = { body: IBoardUpdateManyDto[] } & DebouncedRequestConfig<BoardDto[]>;

export const debouncedUpdateMany = ({ body, beforeRequest, afterRequest }: TConfig): void => {
  cache.set(body);
  callDebouncedRequest({ beforeRequest, afterRequest });
};
