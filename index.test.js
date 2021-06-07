import { groupArrayElements } from "./index";

describe("groupArrayElements", () => {
  it("should throw if first parameter is not an Array", () => {
    expect(() => groupArrayElements("not an array")).toThrow(TypeError);
  });

  it("should throw if second parameter is not a number", () => {
    expect(() => groupArrayElements([], [])).toThrow(TypeError);
  });

  it("should throw if second input is not an integer", () => {
    expect(() => groupArrayElements([], 1.7)).toThrow(TypeError);
  });

  it("should throw an error if second parameter is not a positive integer", () => {
    expect(() => groupArrayElements([], -1)).toThrow(RangeError);
  });

  test.each([
    [[], 1, []],
    [[], 2, []],
    [[1, 2], 3, [1, 2]],
    [[1, 2, 3], 3, [1, 2, 3]],
  ])(
    "should return the input array when length is less than or equal to the groupSize",
    (input, groupSize, expected) => {
      expect(() => groupArrayElements(input, groupSize).toBe(expected));
    }
  );

  it("should return correctly split", () => {
    expect(groupArrayElements([1, 2, 3], 2)).toEqual([[1, 2], [3]]);
  });

  test.each([
    [
      [1, 2, 3, 4, 5, 6, 7, 8, 9],
      3,
      [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ],
    ],
    [ [1, 2, 3, 4, 5, 6, 7, 8, 9],
      2,
      [[1, 2], [3, 4], [5, 6], [7, 8], [9]]],
    [
      [1, 2, 3, 4, 5, 6, 7, 8, 9],
      6,
      [
        [1, 2, 3, 4, 5, 6],
        [7, 8, 9],
      ],
    ],
  ])(
    "should return correctly split %p by %i to get %p",
    (input, groupSize, expected) => {
      expect(() => groupArrayElements(input, groupSize).toEqual(expected));
    }
  );
});
