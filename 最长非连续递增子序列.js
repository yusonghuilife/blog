// 给定一个无序的整数数组，找到其中最长上升子序列的长度
// https://leetcode-cn.com/problems/longest-increasing-subsequence/
// 时间复杂度 nlogn

const lengthOfLIS = function (nums) {
  let minusDp = [nums[0]]
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) {
      minusDp.push(nums[i])
    } else {
      // 二分查找并替换
      if (minusDp[0] > nums[0]) {
        minusDp[0] = nums[0]
        continue
      }

      let left = 0
      let right = nums.length - 1
      while (left < right - 1) {
        let mid = left + ((right - left) >> 1)
        if (nums[i] > nums[mid]) {
          left = mid + 1
        } else if (nums[i] < nums[mid]) {
          right = mid - 1
        } else {
          nums[right] = nums[i]
        }
      }
      nums[right] = nums[i]
    }
  }
  return minusDp.length
}
