let arr = []
let arrProxy = new Proxy(arr, {
  get: (target, key) => {
    console.log('get value by proxy', target, key)
    return prop in target ? target[key] : undefined
  },
  set: (target, key, value) => {
    console.log('set value by proxy', target, key, value)
    target[key] = value
    return true
  },
})
// arrProxy.push(1)
arrProxy[0] = 1
