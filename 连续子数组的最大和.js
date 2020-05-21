// 输入一个整型数组，数组里有正数也有负数。数组中一个或连续的多个整数组成一个子数组。
// 求所有子数组的和的最大值。要求时间复杂度为O(n)
const findGreatestSumOfSubArray = (arr) => {
  let max = Number.MIN_VALUE //  记录最大的子数组和，开始时是最小的整数
  let curMax = 0 // 当前的和
  for (let i of arr) {
    if (curMax <= 0) {
      curMax = i
    } else {
      curMax += i
    }

    if (curMax > max) {
      max = curMax
    }
  }
  return max
}
