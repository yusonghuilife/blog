/**
 * @param {number[]} height
 * @return {number}
 * https://leetcode-cn.com/problems/container-with-most-water/
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
