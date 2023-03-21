import { ITaskUpdateManyDto, TaskDto } from "App/entities/Task/models";
import { createCache, createDebouncedRequest, DebouncedRequestConfig } from "App/utils";

import { updateTaskManyAsync } from "./updateTaskManyAsync";

const cache = createCache<ITaskUpdateManyDto>("id");
const callDebouncedRequest = createDebouncedRequest<TaskDto[]>(1500, () =>
  updateTaskManyAsync(cache.getValuesAndClear())
);

type TConfig = { body: ITaskUpdateManyDto[] } & DebouncedRequestConfig<TaskDto[]>;

export const debouncedUpdateTaskMany = ({ body, beforeRequest, afterRequest }: TConfig): void => {
  cache.set(body);
  callDebouncedRequest({ beforeRequest, afterRequest });
};
