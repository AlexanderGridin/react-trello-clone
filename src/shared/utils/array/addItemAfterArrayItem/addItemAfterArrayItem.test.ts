import { createTestDataFromArray } from "../testing-utils/createTestDataFromArray";
import { addItemAfterArrayItem } from "./addItemAfterArrayItem";

const source = createTestDataFromArray([1, 2, 3, 5]);
const itemToAdd = {
  id: "4",
};

describe("Add item after array item", () => {
  test("when array item is the first item", () => {
    const result = createTestDataFromArray([1, 4, 2, 3, 5]);
    const arrayItem = source[0];

    expect(
      addItemAfterArrayItem({
        array: source,
        item: itemToAdd,
        arrayItem,
        uniqueKey: "id",
      })
    ).toStrictEqual(result);
  });

  test("when array item is the last item", () => {
    const result = createTestDataFromArray([1, 2, 3, 5, 4]);
    const arrayItem = source[source.length - 1];

    expect(
      addItemAfterArrayItem({
        array: source,
        item: itemToAdd,
        arrayItem,
        uniqueKey: "id",
      })
    ).toStrictEqual(result);
  });

  test("when array item not first or last item", () => {
    const result = createTestDataFromArray([1, 2, 3, 4, 5]);
    const arrayItem = source[2];

    expect(
      addItemAfterArrayItem({
        array: source,
        item: itemToAdd,
        arrayItem,
        uniqueKey: "id",
      })
    ).toStrictEqual(result);
  });

  test("when array item don't exist", () => {
    const result = createTestDataFromArray([1, 2, 3, 5, 4]);
    const arrayItem = source[100];

    expect(
      addItemAfterArrayItem({
        array: source,
        item: itemToAdd,
        arrayItem,
        uniqueKey: "id",
      })
    ).toStrictEqual(result);
  });
});
