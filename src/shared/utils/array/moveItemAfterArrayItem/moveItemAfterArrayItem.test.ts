import { createTestDataFromArray } from "../testing-utils/createTestDataFromArray";
import { moveItemAfterArrayItem } from "./moveItemAfterArrayItem";

const source = createTestDataFromArray([1, 2, 3, 4, 5]);
const itemToMove = {
  id: "4",
};

describe("Move item after array item", () => {
  test("when array item is the first item", () => {
    const result = createTestDataFromArray([1, 4, 2, 3, 5]);
    const arrayItem = source[0];

    expect(
      moveItemAfterArrayItem({
        array: source,
        item: itemToMove,
        arrayItem,
        uniqueKey: "id",
      })
    ).toStrictEqual(result);
  });

  test("when array item is the last item", () => {
    const result = createTestDataFromArray([1, 2, 3, 5, 4]);
    const arrayItem = source[source.length - 1];

    expect(
      moveItemAfterArrayItem({
        array: source,
        item: itemToMove,
        arrayItem,
        uniqueKey: "id",
      })
    ).toStrictEqual(result);
  });

  test("when array item not first or last item", () => {
    const result = createTestDataFromArray([1, 2, 4, 3, 5]);
    const arrayItem = source[1];

    expect(
      moveItemAfterArrayItem({
        array: source,
        item: itemToMove,
        arrayItem,
        uniqueKey: "id",
      })
    ).toStrictEqual(result);
  });

  test("when array item not exist", () => {
    const result = createTestDataFromArray([1, 2, 3, 5, 4]);
    const arrayItem = source[100];

    expect(
      moveItemAfterArrayItem({
        array: source,
        item: itemToMove,
        arrayItem,
        uniqueKey: "id",
      })
    ).toStrictEqual(result);
  });
});
