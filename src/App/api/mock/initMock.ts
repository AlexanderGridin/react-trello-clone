import { AxiosInstance } from "axios";
import MockAdapter from "axios-mock-adapter";
import { initBoardMock } from "./Board/initBoardMock";
import { initBoardsMock } from "./Boards/initBoardsMock";

export const initMock = (client: AxiosInstance) => {
  const adapter = new MockAdapter(client, { delayResponse: 1000 });

  initBoardsMock(adapter);
  initBoardMock(adapter);
};
