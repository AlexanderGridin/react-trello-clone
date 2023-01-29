import { generateId } from "shared/utils/generateId";

interface BoardModelConfig {
  title?: string;
}

export class BoardModel {
  public readonly id: string = generateId();

  public title: string;

  constructor({ title = "" }: BoardModelConfig) {
    this.title = title;
  }
}
