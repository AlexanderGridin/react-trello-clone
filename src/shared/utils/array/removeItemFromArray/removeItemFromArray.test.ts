import { removeItemFromArray } from "./removeItemFromArray";

test("Remove item from array", () => {
  const source = [1, 2, 3].map((n: number) => ({
    id: n.toString(),
    title: `Board ${n}`,
  }));

  const result = [1, 3].map((n: number) => ({
    id: n.toString(),
    title: `Board ${n}`,
  }));

  const itemToRemove = { id: "2", title: `Board 2` };

  expect(
    removeItemFromArray({ array: source, item: itemToRemove, uniqueKey: "id" })
  ).toEqual(result);
});
