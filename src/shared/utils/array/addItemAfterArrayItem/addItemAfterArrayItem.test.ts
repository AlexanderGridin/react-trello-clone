import { addItemAfterArrayItem } from "./addItemAfterArrayItem";

test("add item after array item", () => {
  const source = [1, 2, 3].map((n: number) => ({
    id: n.toString(),
  }));

  const itemToAdd = {
    id: "4",
  };

  const insertedAfterFirstItem = [1, 4, 2, 3].map((n: number) => ({
    id: n.toString(),
  }));

  expect(
    addItemAfterArrayItem({
      array: source,
      item: itemToAdd,
      arrayItem: source[0],
      uniqueKey: "id",
    })
  ).toStrictEqual(insertedAfterFirstItem);

  const insertedAfterMiddleItem = [1, 2, 4, 3].map((n: number) => ({
    id: n.toString(),
  }));

  expect(
    addItemAfterArrayItem({
      array: source,
      item: itemToAdd,
      arrayItem: source[1],
      uniqueKey: "id",
    })
  ).toStrictEqual(insertedAfterMiddleItem);

  const insertedAfterLastItem = [1, 2, 3, 4].map((n: number) => ({
    id: n.toString(),
  }));

  expect(
    addItemAfterArrayItem({
      array: source,
      item: itemToAdd,
      arrayItem: source[2],
      uniqueKey: "id",
    })
  ).toStrictEqual(insertedAfterLastItem);
});
