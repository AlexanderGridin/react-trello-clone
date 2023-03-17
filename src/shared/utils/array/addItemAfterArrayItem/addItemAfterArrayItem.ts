import { ArrayUtilConfigWithArrayItem } from "../models";

export const addItemAfterArrayItem = <T>({
  array,
  item,
  arrayItem,
  uniqueKey,
}: ArrayUtilConfigWithArrayItem<T>): T[] => {
  const arrayItemIndex = array?.findIndex((itemFromArray) => itemFromArray[uniqueKey] === arrayItem?.[uniqueKey]) ?? -1;

  if (arrayItemIndex < 0) {
    return [...array, item];
  }

  const left = array.slice(0, arrayItemIndex + 1);
  const right = array.slice(arrayItemIndex + 1);

  return [...left, item, ...right];
};
