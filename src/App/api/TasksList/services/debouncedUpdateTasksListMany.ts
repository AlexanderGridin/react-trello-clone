import { ITasksListUpdateManyDto, TasksListDto } from "App/entities/TasksList/models";
import { createCache, createDebouncedRequest, DebouncedRequestConfig } from "App/utils";
import { updateTasksListMany } from "./updateTasksListMany";

const cache = createCache<ITasksListUpdateManyDto>("id");
const callDebouncedRequest = createDebouncedRequest<TasksListDto[]>(1500, () =>
  updateTasksListMany(cache.getValuesAndClear())
);

type TConfig = { body: ITasksListUpdateManyDto[] } & DebouncedRequestConfig<TasksListDto[]>;

export const debouncedUpdateTasksListMany = ({ body, beforeRequest, afterRequest }: TConfig): void => {
  cache.set(body);
  callDebouncedRequest({ beforeRequest, afterRequest });
};
