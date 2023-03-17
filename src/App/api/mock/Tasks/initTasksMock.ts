import MockAdapter from "axios-mock-adapter";

import { routes } from "App/api/Task/routes";
import { generateId } from "shared/utils";

import { logMockResponse } from "../utils/logMockResponse";
import { connectToMockDb } from "../mockDb";

const { tasks, user: userDb } = connectToMockDb();

export const initTasksMock = (adapter: MockAdapter) => {
  adapter.onPost(routes.addTask).reply((config) => {
    const task = {
      _id: generateId(),
      ...JSON.parse(config.data),
      user: userDb.get(),
    };

    tasks.push(task);

    logMockResponse({
      method: "POST",
      url: routes.addTask,
      response: task,
    });

    return [200, task];
  });

  adapter.onPut(/\/task\//).reply((config) => {
    const id = config.url?.split("/")?.[2] ?? generateId();
    const body = JSON.parse(config.data);

    const task = {
      ...tasks.getById(id),
      ...body,
      user: userDb.get(),
    };

    tasks.update(task);

    logMockResponse({
      method: "PUT",
      url: routes.updateTask.replace("{$taskId}", id),
      response: task,
    });

    return [200, task];
  });

  adapter.onDelete(/\/task\//).reply((config) => {
    const id = config.url?.split("/")?.[2] ?? generateId();
    const task = tasks.getById(id);

    tasks.delete(task);

    logMockResponse({
      method: "DELETE",
      url: routes.updateTask.replace("{$taskId}", id),
      response: task,
    });

    return [200, task];
  });
};
