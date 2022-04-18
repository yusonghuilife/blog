/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
const findContentChildren = function (g, s) {
  g.sort((a, b) => a - b); // children array
  s.sort((a, b) => a - b); // cookie array
  let satisfiedChild = 0;
  for (let i = 0; i < s.length; i++) {
    const cookie = s[i];
    if (cookie >= g[satisfiedChild]) {
      satisfiedChild++;
    }
  }
  return satisfiedChild;
};
