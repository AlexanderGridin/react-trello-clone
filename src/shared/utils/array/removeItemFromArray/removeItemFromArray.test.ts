import { removeItemFromArray } from "./removeItemFromArray";
import { createTestDataFromArray } from "../testing-utils/createTestDataFromArray";

const itemToRemove = { id: "2" };

describe("Remove item from array", () => {
  test("which contains item to remove", () => {
    const source = createTestDataFromArray([1, 2, 3]);
    const result = createTestDataFromArray([1, 3]);

    expect(
      removeItemFromArray({
        array: source,
        item: itemToRemove,
        uniqueKey: "id",
      })
    ).toEqual(result);
  });

  test("which contains only item to remove", () => {
    const source = createTestDataFromArray([2]);

    expect(
      removeItemFromArray({
        array: source,
        item: itemToRemove,
        uniqueKey: "id",
      })
    ).toEqual([]);
  });

  test("which don'n contain item to remove", () => {
    const source = createTestDataFromArray([1, 3, 4]);

    expect(
      removeItemFromArray({
        array: source,
        item: itemToRemove,
        uniqueKey: "id",
      })
    ).toEqual(source);
  });
});
