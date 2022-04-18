/**
 * @param {number[]} nums
 * @return {number}
 */
const jump = function (nums) {
  let maxPos = 0;
  let end = 0;
  let step = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    maxPos = Math.max(i + nums[i], maxPos);
    if (i === end) {
      end = maxPos;
      step++;
    }
  }
  return step;
};
