const quickSort = (arr) => {
  if (arr.length <= 1) return arr;
  const pivot = arr[arr.length - 1];
  const leftArr = [];
  const rightArr = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) leftArr.push(arr[i]);
    else rightArr.push(arr[i]);
  }
  return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
};

const maxSubarraySum = (arr, size) => {
  if (arr.length < size) return -1;

  let maxSum = Number.MIN_VALUE;
  let sum = 0;

  for (let i = 0; i < size; i++) {
    sum += arr[i];
  }

  for (let i = size; i < arr.length; i++) {
    sum = sum - arr[i - size] + arr[i];
    maxSum = Math.max(sum, maxSum);
  }

  return maxSum;
}

const sumEvenInNestedObj = (obj) => {
  let sum = 0;
  for (let key in obj) {
    if (typeof obj[key] === 'number') {
      if (obj[key] % 2 === 0) sum += obj[key];
    }
    else if (typeof obj[key] === 'object') {
      sum += sumEvenInNestedObj(obj[key]);
    }
  }
  return sum;
}

module.exports = {
  quickSort,
  maxSubarraySum,
  sumEvenInNestedObj,
};