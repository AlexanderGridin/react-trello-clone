import { removeItemFromArray } from "../removeItemFromArray";
import { addItemAfterArrayItem } from "../addItemAfterArrayItem";
import { ArrayUtilConfigWithArrayItem } from "../models";

export const moveItemAfterArrayItem = <T>({
  array,
  item,
  arrayItem,
  uniqueKey,
}: ArrayUtilConfigWithArrayItem<T>): T[] => {
  const filteredArray = removeItemFromArray<T>({ array, item, uniqueKey });

  return addItemAfterArrayItem<T>({
    array: filteredArray,
    item,
    arrayItem,
    uniqueKey,
  });
};
