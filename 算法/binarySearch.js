function binarySearch (arr, value) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    const mid = left + ((right - left) >> 1);
    if (arr[mid] === value) {
      return mid;
    } else if (arr[mid] > value) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return -1;
}
