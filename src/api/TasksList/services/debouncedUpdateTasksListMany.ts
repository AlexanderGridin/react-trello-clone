import { createCache } from "shared/utils";
import { ITasksListUpdateManyDto, TasksListDto } from "entities/TasksList/models";

import { createDebouncedRequest, DebouncedRequestConfig } from "../../utils";
import { updateTasksListManyAsync } from "./updateTasksListManyAsync";

const cache = createCache<ITasksListUpdateManyDto>("id");
const callDebouncedRequest = createDebouncedRequest<TasksListDto[]>(1500, () =>
  updateTasksListManyAsync(cache.getValuesAndClear())
);

type TConfig = { body: ITasksListUpdateManyDto[] } & DebouncedRequestConfig<TasksListDto[]>;

export const debouncedUpdateTasksListMany = ({ body, beforeRequest, afterRequest }: TConfig): void => {
  cache.set(body);
  callDebouncedRequest({ beforeRequest, afterRequest });
};
