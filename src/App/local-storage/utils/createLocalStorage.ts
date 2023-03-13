interface LocalStorage<Value> {
  set: (value: Value) => void;
  clear: () => void;
  get: (isParsingNeeded: boolean) => Value;
}

export const createLocalStorage = <Value>(key: string): LocalStorage<Value> => {
  const set = (value: Value): void => {
    if (typeof value === "number") {
      localStorage.setItem(key, value.toString());
      return;
    }

    if (typeof value === "object") {
      localStorage.setItem(key, JSON.stringify(value));
      return;
    }

    localStorage.setItem(key, value as string);
  };

  const clear = (): void => {
    localStorage.removeItem(key);
  };

  const get = (isParsingNeeded = false): Value => {
    return isParsingNeeded ? JSON.parse(localStorage.getItem(key) || "") : localStorage.getItem(key);
  };

  return { set, clear, get };
};
