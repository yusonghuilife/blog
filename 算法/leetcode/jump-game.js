/**
 * @param {number[]} nums
 * @return {boolean}
 */
const canJump = function (nums) {
  let maxCover = 0;
  for (let i = 0; i < maxCover; i++) {
    maxCover = maxCover(i + nums[i], maxCover);
    if (maxCover > nums.length - 1) return true;
  }
  return false;
};
