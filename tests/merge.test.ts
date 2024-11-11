import { merge } from "../src/merge";

describe("merge function", () => {
  test("merges three sorted arrays 1", () => {
    const collection_1 = [1, 3, 5];
    const collection_2 = [2, 4, 6];
    const collection_3 = [9, 8, 7];
    const result = merge(collection_1, collection_2, collection_3);
    expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  test("merges three sorted arrays 2", () => {
    const collection_1 = [1, 6, 7, 12, 15];
    const collection_2 = [2, 4, 8, 10, 11, 13, 14];
    const collection_3 = [100, 90, 80, 70, 60, 50, 40, 30, 20];
    const result = merge(collection_1, collection_2, collection_3);
    expect(result).toEqual([
      1, 2, 4, 6, 7, 8, 10, 11, 12, 13, 14, 15, 20, 30, 40, 50, 60, 70, 80, 90,
      100,
    ]);
  });

  test("handles empty arrays", () => {
    const collection_1: number[] = [];
    const collection_2: number[] = [];
    const collection_3: number[] = [];
    const result = merge(collection_1, collection_2, collection_3);
    expect(result).toEqual([]);
  });

  test("handles single element arrays", () => {
    const collection_1 = [1];
    const collection_2 = [2];
    const collection_3 = [3];
    const result = merge(collection_1, collection_2, collection_3);
    expect(result).toEqual([1, 2, 3]);
  });

  test("handles negative numbers", () => {
    const collection_1 = [-5, -3, -1];
    const collection_2 = [-4, -2, 0];
    const collection_3 = [5, 3, 1];
    const result = merge(collection_1, collection_2, collection_3);
    expect(result).toEqual([-5, -4, -3, -2, -1, 0, 1, 3, 5]);
  });
});
