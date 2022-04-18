/**
 * @param {number[]} nums
 * @return {number}
 * https://leetcode-cn.com/problems/maximum-subarray/
 */
/**
 * 最大子数组 由第i个数结尾的「连续子数组的最大和」f(i)中的最大值构成
 * f(i)=max{f(i−1)+nums[i],nums[i]}
 */
const maxSubArray = function (nums) {
  let max = nums[0];
  let preMaxSubArray = 0;
  for (let i = 0; i < nums.length; i++) {
    preMaxSubArray = Math.max(preMaxSubArray + nums[i], nums[i]);
    max = Math.max(preMaxSubArray, max);
  }
  return max;
};
