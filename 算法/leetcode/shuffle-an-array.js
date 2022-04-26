/**
 * @param {number[]} nums
 */
const Solution = function (nums) {
  this.nums = nums;
};

/**
 * @return {number[]}
 */
Solution.prototype.reset = function () {
  return this.nums;
};

/**
 * @return {number[]}
 */
Solution.prototype.shuffle = function () {
  const shuffledNums = this.nums.slice();
  for (let i = 0; i < shuffledNums.length; i++) {
    const idx = Math.floor((Math.random() * (shuffledNums.length - i))) + i; // 从未洗牌的数组中随机取一位数
    const tmp = shuffledNums[idx];
    shuffledNums[idx] = shuffledNums[i];
    shuffledNums[i] = tmp;
  }
  return shuffledNums;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */
