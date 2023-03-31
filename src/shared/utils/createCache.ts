export const createCache = <Value>(keyField: keyof Value) => {
  const cache = new Map<Value[typeof keyField], Value>();

  const getValuesAndClear = (): Array<Value> => {
    const values = Array.from(cache.values());
    cache.clear();

    return values;
  };

  const set = (data: Value | Value[]) => {
    if (!Array.isArray(data)) {
      cache.set(data[keyField], data);
      return;
    }

    data.forEach((item: Value) => {
      cache.set(item[keyField], item);
    });
  };

  return { getValuesAndClear, set };
};
