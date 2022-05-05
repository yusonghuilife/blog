/**
 *
数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。

示例 1：

输入：n = 3
输出：["((()))","(()())","(())()","()(())","()()()"]
示例 2：

输入：n = 1
输出：["()"]

提示：1 <= n <= 8
 */
/**
 * @param {number} n
 * @return {string[]}
 */
const generateParenthesis = function (n) {
  const res = [];
  if (n === 0) return res;
  dfs('', n, n, res);
  return res;
};

/**
 *
 * @param {*} curStr 当前递归结果
 * @param {*} left 左括号还有几个可以使用
 * @param {*} right 右括号还有几个可以使用
 * @param {*} res 存储结果
 * @returns void
 */
const dfs = (curStr, left, right, res) => {
  if (left === 0 && right === 0) {
    res.push(curStr);
    return;
  }
  // 左括号可以使用的个数严格大于右括号可以使用的个数，才剪枝
  if (left > right) return;
  if (left > 0) dfs(curStr + '(', left - 1, right, res);
  if (right > 0) dfs(curStr + ')', left, right - 1, res);
};
