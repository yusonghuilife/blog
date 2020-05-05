// 输入：s = "abc"
// 输出：["abc","acb","bac","bca","cab","cba"]
var permutation = function (s) {
  let vis = []
  let res = []
  let dfs = (step, curP) => {
    if (step === s.length) {
      if (res.indexOf(curP) === -1) {
        res.push(curP)
      }
      return
    }
    // 递归增加排列，使用vis确定已经存在的元素
    for (let i = 0; i < s.length; i++) {
      if (vis[i] === true) continue
      vis[i] = true
      dfs(step + 1, curP + s[i])
      vis[i] = false
    }
  }
  dfs(0, "")
  return res
}
