import { ArrayUtilConfigWithArrayItem } from "../models/ArrayUtilConfigWithArrayItem";

export const addItemBeforeArrayItem = <T>({
  array,
  item,
  arrayItem,
  uniqueKey,
}: ArrayUtilConfigWithArrayItem<T>): T[] => {
  const arrayItemIndex =
    array?.findIndex(
      (itemFromArray) => itemFromArray[uniqueKey] === arrayItem?.[uniqueKey]
    ) ?? -1;

  if (arrayItemIndex < 0) {
    return [...array, item];
  }

  const left = array.slice(0, arrayItemIndex);
  const right = array.slice(arrayItemIndex);

  return [...left, item, ...right];
};
