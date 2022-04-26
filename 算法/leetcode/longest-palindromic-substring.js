/**
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = function (s) {
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
