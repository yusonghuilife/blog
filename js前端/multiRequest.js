const multiRequest = (urls = [], maxNum) => {
  const result = new Array(urls.length).fill(false)
  const sum = urls.length // 总数
  let count = 0 // 已完成数
  return new Promise((resolve, reject) => {
    // 先请求maxNum个呗
    while (count < maxNum) {
      next()
    }
    function next () {
      const current = count++
      // 边界
      if (current >= sum) {
        !result.includes(false) && resolve(result)
        return
      }
      const url = urls[current]
      fetch(url).then((res) => {
        result[current] = res // save result
        // 还有未完成，递归；
        if (current < sum) {
          next()
        }
      }).catch((err) => {
        result[current] = err // save error
        if (current < sum) {
          next()
        }
      })
    }
  })
}
const url2 = 'https://api.github.com/search/users?q=d'
const arr = new Array(100).fill(url2)
multiRequest(arr, 10).then((res) => {
  console.log(res)
})
