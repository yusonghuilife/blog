/**
给定一个长度为 n 的整数数组 height 。有 n 条垂线，第 i 条线的两个端点是 (i, 0) 和 (i, height[i]) 。

找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。

返回容器可以储存的最大水量。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/container-with-most-water
 */
function maxArea (height) {
  if (!height.length || height.length < 2) return 0;
  const length = height.length;
  let left = 0;
  let right = length - 1;
  let maxSize = 0;
  while (left !== right) {
    if (height[left] >= height[right]) {
      maxSize = Math.max(maxSize, height[right] * (right - left));
      right--;
    } else {
      maxSize = Math.max(maxSize, height[left] * (right - left));
      left++;
    }
  }
  return maxSize;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
