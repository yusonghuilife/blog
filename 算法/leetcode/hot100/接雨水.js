/**
给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。

示例 1：
输入：height = [0,1,0,2,1,0,1,3,2,1,2,1]
输出：6
解释：上面是由数组 [0,1,0,2,1,0,1,3,2,1,2,1] 表示的高度图，在这种情况下，可以接 6 个单位的雨水（蓝色部分表示雨水）。

示例 2：
输入：height = [4,2,0,3,2,5]
输出：9

提示：
n == height.length
1 <= n <= 2 * 104
0 <= height[i] <= 105

 */
/**
 * @param {number[]} height
 * @return {number}
 */
const trap = function (height) {
  let left = 0;
  let right = height.length - 1;
  let leftMax = 0;
  let rightMax = 0;
  let max = 0;
  while (left <= right) {
    if (leftMax <= rightMax) {
      // 从左遍历一定是对的，与rightMax无关
      max += Math.max(0, leftMax - height[left]);
      leftMax = Math.max(leftMax, height[left]);
      left++;
    } else {
      max += Math.max(0, rightMax - height[right]);
      rightMax = Math.max(rightMax, height[right]);
      right--;
    }
  }
  return max;
};
