// k种面值硬币，硬币数量无限，如何使用最少数量硬币凑到amount面值，不可能凑出返回-1

// 递归
function coinChange(coins, amount) {
  let memo = new Map()
  const dp = function (coin, memo) {
    if (coin === 0) return 0
    if (coin < 0) return -1
    if (memo.has(coin)) return memo.get(coin)
    let res = amount + 1
    for (let i of coins) {
      if (dp(coin - i, memo) === -1) continue
      res = Math.min(res, 1 + dp(coin - i, memo))
    }
    if (res !== amount + 1) memo.set(coins, res)
    return res
  }
  return dp(amount, memo)
}

// dp方式自底向上
// dp数组保存index时需要的硬币数

const coinChange = function (coins, amount) {
  let dp = new Array(amount + 1).fill(amount + 1)
  dp[0] = 0
  for (let i = 0; i < dp.length; i++) {
    for (let coin of coins) {
      if (coin > i) continue
      dp[i] = Math.min(dp[i], 1 + dp[i - coins])
    }
  }
  // 注意如果不能全部分完，则必定dp分割有一部分为amount+1，那么结果就是amount+1
  return dp[amount] === amount + 1 ? -1 : dp[amount]
}
