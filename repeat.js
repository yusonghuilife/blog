// repeat 实现，使用JS实现一个repeat方法
// 调用这个 repeatedFunc("hellworld")，会alert4次 helloworld, 每次间隔3秒
function repeat(func, times, wait) {
  return async function (msg) {
    for (let i = 0; i < times; i++) {
      await new Promise((resolve) => {
        setTimeout(() => {
          func(msg)
          resolve()
        }, wait)
      })
    }
  }
}
const log = (msg) => console.log(msg)
const repeatedFunc = repeat(log, 4, 3000)
repeatedFunc("hellworld")
