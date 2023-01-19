export const addItemAfterArrayItem = <T>(
  array: Array<T>,
  item: T,
  arrayItem: T,
  uniqueKey: keyof T
): Array<T> => {
  const arrayItemIndex =
    array?.findIndex(
      (itemFromArray) => itemFromArray[uniqueKey] === arrayItem[uniqueKey]
    ) ?? -1;

  if (arrayItemIndex < 0) {
    return [...array, item];
  }

  const left = array.slice(0, arrayItemIndex + 1);
  const right = array.slice(arrayItemIndex + 1);

  return [...left, item, ...right];
};
