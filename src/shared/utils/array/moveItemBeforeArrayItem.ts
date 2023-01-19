import { addItemBeforeArrayItem } from "./addItemBeforeArrayItem";
import { removeItemFromArray } from "./removeItemFromArray";

export const moveItemBeforeArrayItem = <T>(
  array: Array<T>,
  item: T,
  arrayItem: T,
  uniqueKey: keyof T
): Array<T> => {
  const filteredArray = removeItemFromArray<T>(array, item, uniqueKey);
  return addItemBeforeArrayItem<T>(filteredArray, item, arrayItem, uniqueKey);
};
