export interface ArrayUtilConfig<T> {
  array: T[];
  item: T;
  uniqueKey: keyof T;
}
