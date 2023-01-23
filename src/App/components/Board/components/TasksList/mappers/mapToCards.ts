import { Task } from "App/models/Task";
import { CardModel } from "shared/components/Card/models/CardModel";

export const mapToCards = (source: Array<Task>): Array<CardModel> =>
  source?.map((task: Task) => ({
    id: task.id,
    content: task.text,
  })) ?? [];
