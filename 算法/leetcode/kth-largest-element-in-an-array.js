/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const findKthLargest = function (nums, k) {
  // 1. 快排，类似二分，找到k-1当中间点，左右两边交换
  quickSort(nums, 0, nums.length - 1, k);
  return nums[nums.length - k];
};

const swap = (arr, i, j) => {
  const tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
};

const quickSort = (arr, left, right, k) => {
  if (left < right) {
    const pivot = arr[left]; // 左边为基准值 得右边先走
    let l = left;
    let r = right;
    while (l < r) {
      while (l < r && arr[r] >= pivot) r--; // 右边先走
      while (l < r && arr[l] <= pivot) l++;
      swap(arr, l, r);
    }
    // 保证了l = r的时候 arr【i】小于基准值
    swap(arr, left, r);
    const curLen = arr.length - k;
    if (curLen > r) {
      quickSort(arr, r + 1, right, k);
    } else if (curLen < r) {
      quickSort(arr, left, r - 1, k);
    }
  }
};

// 2. 建立k元素小顶堆，再塞入剩下的元素，比顶小的放入堆即可
