import { addItemAfterArrayItem } from "./addItemAfterArrayItem";
import { removeItemFromArray } from "./removeItemFromArray";

export const moveItemAfterArrayItem = <T>(
  array: Array<T>,
  item: T,
  arrayItem: T,
  uniqueKey: keyof T
): Array<T> => {
  const filteredArray = removeItemFromArray<T>(array, item, uniqueKey);
  return addItemAfterArrayItem<T>(filteredArray, item, arrayItem, uniqueKey);
};
