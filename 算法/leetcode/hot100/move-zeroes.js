/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = (nums) => {
  let j = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[j++] = nums[i];
    }
  }
  // 非0元素统计完了，剩下的都是0了
  // 所以第二次遍历把末尾的元素都赋为0即可
  for (let i = j; i < nums.length; ++i) {
    nums[i] = 0;
  }
};

const moveZeroes1 = (nums) => {
  let j = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      // j把非0的地方填满
      swap(nums[i], nums[j++]);
    }
  }
};
