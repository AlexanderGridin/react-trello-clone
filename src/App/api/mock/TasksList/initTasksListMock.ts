import MockAdapter from "axios-mock-adapter";

import { routes } from "App/api/TasksList/routes";
import { generateId } from "shared/utils";

import { logMockResponse } from "../utils/logMockResponse";
import { connectToMockDb } from "../mockDb";

const { tasksLists } = connectToMockDb();

export const initTasksListMock = (adapter: MockAdapter) => {
  adapter.onPost(routes.addTasksList).reply((config) => {
    const reqBody = JSON.parse(config.data);
    const list = {
      _id: generateId(),
      tasks: [],
      ...reqBody,
    };

    tasksLists.push(list);

    logMockResponse({
      method: "POST",
      url: routes.addTasksList,
      response: list,
    });

    return [200, list];
  });

  adapter.onPut(/\/tasks-list\//).reply((config) => {
    const id = config.url?.split("/")?.[2] ?? generateId();
    const reqBody = JSON.parse(config.data);
    const list = {
      ...tasksLists.getById(id),
      ...reqBody,
    };

    tasksLists.update(list);

    logMockResponse({
      method: "PUT",
      url: routes.updateTasksList.replace("{$tasksListId}", id),
      response: list,
    });

    return [200, list];
  });

  adapter.onDelete(/\/tasks-list\//).reply((config) => {
    const id = config.url?.split("/")?.[2] ?? generateId();
    const list = {
      ...tasksLists.getById(id),
    };

    tasksLists.delete(list);

    logMockResponse({
      method: "DELETE",
      url: routes.removeTasksList.replace("{$tasksListId}", id),
      response: list,
    });

    return [200, list];
  });
};
