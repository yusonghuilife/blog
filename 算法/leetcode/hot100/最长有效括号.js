/**
给你一个只包含 '('和 ')'的字符串，找出最长有效（格式正确且连续）括号子串的长度。

示例 1：
输入：s = "(()"
输出：2
解释：最长有效括号子串是 "()"

示例 2：
输入：s = ")()())"
输出：4
解释：最长有效括号子串是 "()()"

示例 3：
输入：s = ""
输出：0

提示：
0 <= s.length <= 3 * 104
s[i] 为 '(' 或 ')'

 */

/**
 * @param {string} s
 * @return {number}
 */
const longestValidParentheses = function (s) {
  const stack = [];
  let max = 0;
  let start = 0;
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (char === '(') {
      stack.push(i);
    } else {
      if (stack.length === 0) {
        // 说明无法组成合法括号串
        start = i + 1;
      } else {
        stack.pop();
        max = Math.max(max, stack.length === 0 ? i - start + 1 : i - stack[stack.length - 1]); // 说明之前匹配了多少对括号了
      }
    }
  }
  return max;
};
