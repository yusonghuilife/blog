// 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。
const lengthOfLongestSubstring = (s) => {
  let arr = []
  let max = 0
  let maxStr = ''
  for (let item of s) {
    if (arr.includes(item)) {
      // let index = arr.indexOf(item)
      arr = []
    }
    arr.push(item)
    max = max > arr.length ? max : arr.length
    maxStr = arr.length > maxStr.length ? arr.join('') : maxStr
  }
  return [max, maxStr]
}
