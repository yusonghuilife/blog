/**
 * @param {number[]} prices
 * @return {number}
 * https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock/
 */
// 思路，算出第i天赚多少钱，求最大即可
const maxProfit = function (prices) {
  let maxProfit = -Infinity;
  let minPrice = prices[0];
  for (let i = 0; i < prices.length; i++) {
    const price = prices[i];
    minPrice = Math.min(price, minPrice);
    maxProfit = Math.max(maxProfit, price - minPrice);
  }
  return maxProfit;
};
