export interface TestDataModel {
  id: string;
}

export const createTestDataFromArray = (array: number[]): TestDataModel[] =>
  array.map((n: number) => ({
    id: n.toString(),
  }));
