/**
 * @param {string} s
 * @return {boolean}
 */
const dic = { '{': '}', '[': ']', '(': ')' };
function isValid (s) {
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    if (stack.length === 0) {
      stack.push(s[i]);
    } else {
      const pre = stack.pop();
      if (dic[pre] === s[i]) {
        // 消掉
      } else {
        stack.push(pre, s[i]);
      }
    }
  }
  return stack.length === 0;
}

console.log(isValid('()[]{}'));
