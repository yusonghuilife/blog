function acc() {
  let proxy = {}
  let value = 0
  Object.defineProperty(proxy, 'num', {
    get() {
      return value
    },
    set(x) {
      value = x
    },
  })
  return function () {
    console.log(proxy.num++)
  }
}

let res = acc()
for (var i = 0; i < 4; i++) {
  setTimeout(res, i * 1000)
}
