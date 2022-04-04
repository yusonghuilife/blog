/**
 * https://leetcode-cn.com/problems/two-sum/
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {
  const dict = {};
  for (let i = 0; i < nums.length; i++) {
    if (dict[target - nums[i]] !== undefined) {
      return [i, dict[target - nums[i]]];
    }
    dict[nums[i]] = i;
  }
  return [-1, -1];
};
