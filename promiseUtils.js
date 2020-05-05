Promise.prototype.finally = function (cb) {
  const P = this.constructor
  return this.then(
    (value) => Promise.resolve(cb()).then(() => value),
    (reason) =>
      Promise.resolve(cb()).then(() => {
        throw reason
      })
  )
}

Promise.all = function (promises) {
  const promise = Array.from(promises)
  const res = []
  let successNum = 0
  return new Promise((resolve, reject) => {
    promise.forEach((p) => {
      Promise.resolve(p).then(
        (value) => {
          // 此处先转换为Promise对象，否则不一定有then方法
          res[successNum++] = value // 注意此处forEach为并发执行，不可简单的push
          if (res.length === successNum) {
            resolve(res)
          }
        },
        (e) => {
          reject(e)
        }
      )
    })
  })
}

Promise.race = function (promises) {
  const promise = Array.from(promises)
  return new Promise((resolve, reject) => {
    promise.forEach((p) => {
      Promise.resolve(p).then(resolve, reject)
    })
  })
}
