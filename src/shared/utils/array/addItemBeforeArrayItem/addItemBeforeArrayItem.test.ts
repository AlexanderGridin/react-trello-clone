import { addItemBeforeArrayItem } from "./addItemBeforeArrayItem";
import { createTestDataFromArray } from "../testing-utils/createTestDataFromArray";

const source = createTestDataFromArray([1, 2, 3]);
const itemToAdd = {
  id: "4",
};

describe("Add item before array item", () => {
  test("when array item don't exist", () => {
    const result = createTestDataFromArray([1, 2, 3, 4]);
    const arrayItem = source[10];

    expect(
      addItemBeforeArrayItem({
        array: source,
        item: itemToAdd,
        arrayItem,
        uniqueKey: "id",
      })
    ).toStrictEqual(result);
  });

  test("when array item is the first item", () => {
    const result = createTestDataFromArray([4, 1, 2, 3]);
    const arrayItem = source[0];

    expect(
      addItemBeforeArrayItem({
        array: source,
        item: itemToAdd,
        arrayItem,
        uniqueKey: "id",
      })
    ).toStrictEqual(result);
  });

  test("when array item is not the first or last item", () => {
    const result = createTestDataFromArray([1, 4, 2, 3]);
    const arrayItem = source[1];

    expect(
      addItemBeforeArrayItem({
        array: source,
        item: itemToAdd,
        arrayItem,
        uniqueKey: "id",
      })
    ).toStrictEqual(result);
  });

  test("when array item is the last item", () => {
    const result = createTestDataFromArray([1, 2, 4, 3]);
    const arrayItem = source[source.length - 1];

    expect(
      addItemBeforeArrayItem({
        array: source,
        item: itemToAdd,
        arrayItem,
        uniqueKey: "id",
      })
    ).toStrictEqual(result);
  });
});
