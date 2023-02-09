export const createTestDataFromArray = (array: number[]) =>
  array.map((n: number) => ({
    id: n.toString(),
  }));
