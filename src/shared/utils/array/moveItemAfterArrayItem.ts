import { addItemAfterArrayItem } from "./addItemAfterArrayItem/addItemAfterArrayItem";
import { ArrayUtilConfigWithArrayItem } from "./models/ArrayUtilConfigWithArrayItem";
import { removeItemFromArray } from "./removeItemFromArray/removeItemFromArray";

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
