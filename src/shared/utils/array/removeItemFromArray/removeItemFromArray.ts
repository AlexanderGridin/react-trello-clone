import { ArrayUtilConfig } from "../models/ArrayUtilConfig";

export const removeItemFromArray = <T>({ array, item, uniqueKey }: ArrayUtilConfig<T>): T[] => {
  const itemIndex = array?.findIndex((arrayItem) => arrayItem[uniqueKey] === item[uniqueKey]) ?? -1;

  if (itemIndex < 0) {
    return [...array];
  }

  const left = array.slice(0, itemIndex);
  const right = array.slice(itemIndex + 1);

  return [...left, ...right];
};
