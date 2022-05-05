/**
给你一个字符串 s，找到 s 中最长的回文子串。

示例 1：

输入：s = "babad"
输出："bab"
解释："aba" 同样是符合题意的答案。
示例 2：

输入：s = "cbbd"
输出："bb"

提示：

1 <= s.length <= 1000
s 仅由数字和英文字母组成

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/longest-palindromic-substring
 */
function longestPalindrome (s) {
  if (!s || !s.length) return '';
  let rangeLeft = 0;
  let rangeRight = 0;
  for (let i = 0; i < s.length; i++) {
    // 每一个找到它最长的回文
    [rangeLeft, rangeRight] = expandPalindromeStr(s, i, i, rangeLeft, rangeRight);
  }
  return s.slice(rangeLeft, rangeRight + 1);
};

function expandPalindromeStr (s, left, right, rangeLeft, rangeRight) {
  // 先找到中间点 bab baab
  while (right < s.length - 1 && s[left] === s[right + 1]) {
    right++;
  }
  while (left >= 0 && right < s.length - 1 && s[left - 1] === s[right + 1]) {
    left--;
    right++;
  }
  return right - left > rangeRight - rangeLeft ? [left, right] : [rangeLeft, rangeRight];
}

console.log(longestPalindrome('babad'));
