import { AxiosInstance } from "axios";
import MockAdapter from "axios-mock-adapter";
import { initBoardMock } from "./Board/initBoardMock";
import { initBoardsMock } from "./Boards/initBoardsMock";
import { initTasksMock } from "./Tasks/initTasksMock";
import { initTasksListMock } from "./TasksList/initTasksListMock";
import { initUserMock } from "./User/initUserMock";

export const initMock = (client: AxiosInstance) => {
  const adapter = new MockAdapter(client, { delayResponse: 1000 });

  initBoardsMock(adapter);
  initBoardMock(adapter);
  initTasksListMock(adapter);
  initTasksMock(adapter);
  initUserMock(adapter);
};
