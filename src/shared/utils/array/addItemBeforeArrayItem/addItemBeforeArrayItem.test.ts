import { addItemBeforeArrayItem } from "./addItemBeforeArrayItem";

test("add item before array item", () => {
  const source = [1, 2, 3].map((n: number) => ({
    id: n.toString(),
  }));

  const itemToAdd = {
    id: "4",
  };

  const insertedBeforeFirstItem = [4, 1, 2, 3].map((n: number) => ({
    id: n.toString(),
  }));

  expect(
    addItemBeforeArrayItem({
      array: source,
      item: itemToAdd,
      arrayItem: source[0],
      uniqueKey: "id",
    })
  ).toStrictEqual(insertedBeforeFirstItem);

  const insertedBeforeMiddleItem = [1, 4, 2, 3].map((n: number) => ({
    id: n.toString(),
  }));

  expect(
    addItemBeforeArrayItem({
      array: source,
      item: itemToAdd,
      arrayItem: source[1],
      uniqueKey: "id",
    })
  ).toStrictEqual(insertedBeforeMiddleItem);

  const insertedBeforeLastItem = [1, 2, 4, 3].map((n: number) => ({
    id: n.toString(),
  }));

  expect(
    addItemBeforeArrayItem({
      array: source,
      item: itemToAdd,
      arrayItem: source[2],
      uniqueKey: "id",
    })
  ).toStrictEqual(insertedBeforeLastItem);
});
