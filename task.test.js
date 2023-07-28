const { quickSort, maxSubarraySum, sumEvenInNestedObj } = require("./task");

describe("quickSort", () => {
  test("should sort an array of numbers in ascending order", () => {
    const input = [4, 2, 1, 5, 3];
    const sorted = quickSort(input);
    expect(sorted).toEqual([1, 2, 3, 4, 5]);
  });

  test("should handle an empty array", () => {
    const input = [];
    const sorted = quickSort(input);
    expect(sorted).toEqual([]);
  });

  test("should handle an array with a single element", () => {
    const input = [42];
    const sorted = quickSort(input);
    expect(sorted).toEqual([42]);
  });

  // Add more test cases to cover edge cases and specific scenarios.
});

describe("maxSubarraySum", () => {
  test("should find the maximum sum of subarrays of the given size", () => {
    const inputArray = [1, 2, 3, 4, 5, 6];
    const subarraySize = 3;
    const maxSum = maxSubarraySum(inputArray, subarraySize);
    expect(maxSum).toBe(15); // The subarray with maximum sum is [4, 5, 6] => 15
  });

  test("should return -1 if the array length is less than the subarray size", () => {
    const inputArray = [1, 2, 3];
    const subarraySize = 5;
    const maxSum = maxSubarraySum(inputArray, subarraySize);
    expect(maxSum).toBe(-1);
  });

  // Add more test cases to cover different scenarios.
});

describe("sumEvenInNestedObj", () => {
  test("should return the sum of even numbers in a nested object", () => {
    const inputObj = {
      a: 2,
      b: {
        c: 4,
        d: {
          e: 6,
          f: 7,
        },
      },
      g: 8,
    };
    const sum = sumEvenInNestedObj(inputObj);
    expect(sum).toBe(20); // 2 + 4 + 6 + 8 = 20
  });

  test("should handle an object with no even numbers", () => {
    const inputObj = {
      a: 1,
      b: {
        c: 3,
        d: {
          e: 5,
          f: 7,
        },
      },
      g: 9,
    };
    const sum = sumEvenInNestedObj(inputObj);
    expect(sum).toBe(0);
  });

  // Add more test cases to cover different scenarios.
  test("should handle an object with various types of values", () => {
    const inputObj = {
      a: 2,
      b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
      c: { c: { c: 2 }, cc: "ball", ccc: 5 },
      d: 1,
      e: { e: { e: 4 }, ee: "car" },
    };

    const sum = sumEvenInNestedObj(inputObj);
    expect(sum).toBe(12);
  });

  test("should handle an object with no nested objects", () => {
    const inputObj = {
      a: 2,
      b: 4,
      c: 6,
      d: 8,
    };

    const sum = sumEvenInNestedObj(inputObj);
    expect(sum).toBe(20);
  });
});
