import { ITaskUpdateManyDto, TaskDto } from "App/entities/Task/models";
import { createCache, createDebouncedRequest, DebouncedRequestConfig } from "App/utils";
import { updateTaskMany } from ".";

const cache = createCache<ITaskUpdateManyDto>("id");
const callDebouncedRequest = createDebouncedRequest<TaskDto[]>(1500, () => updateTaskMany(cache.getValuesAndClear()));

type TConfig = { body: ITaskUpdateManyDto[] } & DebouncedRequestConfig<TaskDto[]>;

export const debouncedUpdateTaskMany = ({ body, beforeRequest, afterRequest }: TConfig): void => {
  cache.set(body);
  callDebouncedRequest({ beforeRequest, afterRequest });
};
