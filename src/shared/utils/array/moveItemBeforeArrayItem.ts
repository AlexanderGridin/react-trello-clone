import { addItemBeforeArrayItem } from "./addItemBeforeArrayItem/addItemBeforeArrayItem";
import { ArrayUtilConfigWithArrayItem } from "./models/ArrayUtilConfigWithArrayItem";
import { removeItemFromArray } from "./removeItemFromArray/removeItemFromArray";

export const moveItemBeforeArrayItem = <T>({
  array,
  item,
  arrayItem,
  uniqueKey,
}: ArrayUtilConfigWithArrayItem<T>): T[] => {
  const filteredArray = removeItemFromArray<T>({ array, item, uniqueKey });

  return addItemBeforeArrayItem<T>({
    array: filteredArray,
    item,
    arrayItem,
    uniqueKey,
  });
};
