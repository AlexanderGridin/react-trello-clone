import { createCache } from "shared/utils";
import { ITaskUpdateManyDto, TaskDto } from "entities/Task/models";

import { updateTaskManyAsync } from "./updateTaskManyAsync";
import { createDebouncedRequest, DebouncedRequestConfig } from "../../utils";

const cache = createCache<ITaskUpdateManyDto>("id");
const callDebouncedRequest = createDebouncedRequest<TaskDto[]>(1500, () =>
  updateTaskManyAsync(cache.getValuesAndClear())
);

type TConfig = { body: ITaskUpdateManyDto[] } & DebouncedRequestConfig<TaskDto[]>;

export const debouncedUpdateTaskMany = ({ body, beforeRequest, afterRequest }: TConfig): void => {
  cache.set(body);
  callDebouncedRequest({ beforeRequest, afterRequest });
};
