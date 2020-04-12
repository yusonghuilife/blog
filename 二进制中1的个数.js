// 11100
// -1  11011
// & 11000
function NumberOf1(n) {
  let count = 0
  while (n !== 0) {
    count++
    n = n & (n - 1)
  }
  return count
}
