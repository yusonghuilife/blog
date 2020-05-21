function ajax(options) {
  let { url, method = "get", async, data } = options
  const xhr = new XMLHttpRequest()

  return new Promise((resolve, reject) => {
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if ((xhr.status > 200 && xhr.status < 300) || xhr.status === 304) {
          resolve(xhr.responseText)
        } else {
          reject(xhr.responseText)
        }
      }
    }

    xhr.onerror = (err) => reject(err)

    // post params
    let dataArr = []
    Object.keys(data).forEach((el) => {
      dataArr.push(`${encodeURIComponent(el)}=${encodeURIComponent(data[el])}`)
    })

    if (method === "get") {
      url +=
        url.indexOf("?") === -1
          ? `?${dataArr.join("&")}`
          : `${dataArr.join("&")}`
    }
    xhr.open(method, url, async)

    if (method === "post") {
      xhr.send(dataArr.join("&"))
    } else {
      xhr.send(null)
    }
  })
}

function binarySearch(arr, target) {
  let left = 0
  let end = arr.length - 1
  while (left < end) {
    let mid = left + ((end - left) >> 1)

    if (arr[mid] === target) {
      return mid
    } else if (arr[mid] > target) {
      end = mid - 1
    } else {
      left = mid + 1
    }
  }
  return -1
}

Function.prototype.bind = function (context = window, ...args1) {
  const func = this
  return function F(...args2) {
    if (this instanceof F) {
      return new func(...args1, ...args2)
    }

    return func.call(context, ...args1, ...args2)
  }
}

Function.prototype.call = function (context, ...args) {
  const func = this
  const fn = Symbol()
  context[fn] = func
  const result = context[fn](...args)
  delete context[fn]
  return result
}

// const curry = function (fn, args = []) {
//   if (args.length === fn.length) {
//     return fn(...args)
//   } else {
//     return function (...args1) {
//       return curry(fn, [...args, ...args1])
//     }
//   }
// }

const curry = (fn, args = []) => (...args) =>
  args.length === fn.length
    ? fn(...args)
    : (...args1) => curry(fn, [...args, ...args1])

function debounce(fn, time) {
  let timer
  return function (...args) {
    clearTimeout(timer)
    timer = setTimeout(function () {
      fn(...args)
    }, time || 500)
  }
}

function throttle(fn, time) {
  let canRun = true
  return function (...args) {
    if (!canRun) return ""
    canRun = false
    setTimeout(function () {
      fn(...args)
      canRun = true
    }, time || 500)
  }
}

function deepClone(target, map = new WeakMap()) {
  // const res = {}
  if (typeof target === "object") {
    const res = Array.isArray(target) ? [] : {}
    if (map.get(target)) {
      return map.get(target)
    }
    map.set(target, res)
    for (let key in target) {
      res[key] = deepClone(target[key], map)
    }
  } else {
    return target
  }
}

function DOM2JSON(node) {
  const res = {}
  res.tag = node.name
  node.children = [...node.children].map((el) => DOM2JSON(el))
  return res
}

class EventEmitter {
  constructor() {
    this._eventpool = {}
  }

  on(ename, cb) {
    this._eventpool[name]
      ? this._eventpool[name].push(cb)
      : (this._eventpool[name] = [cb])
  }

  emit(ename, ...args) {
    this._eventpool[ename] &&
      this._eventpool[ename].forEach((cb) => cb(...args))
  }

  off(ename, cb) {
    this._eventpool[ename] &&
      (this._eventpool[ename] = this._eventpool[ename].filter(
        (fn) => fn !== cb
      ))
  }

  once(ename, cb) {
    this._eventpool[name] &&
      this.on(ename, () => {
        cb()
        this.off(ename, cb)
      })
  }
}

function flat(arr) {
  arr.reduce((acc, cur) => {
    return Array.isArray(cur) ? acc.concat(flat(cur)) : acc.concat(cur)
  }, [])
}

function instanceOf(instance, constructor) {
  while (instance) {
    if (instance.prototype === constructor.prototype) return true
    instance = Object.getPrototypeOf(instance)
  }
  return false
}

const jsonp = (url, data, cb, cbName) => {
  let params = Object.keys(data)
    .map((el) => `${el}=${data[el]}`)
    .join("&")

  url += url.indexOf("?") > -1 ? `&${params}` : `?${params}`

  url += `cb=${cbName}`

  const scr = document.createElement("script")
  scr.src = url
  body.appendChild(scr)

  window[cbName] = function (res) {
    cb(res)
    body.removeChild(scr)
  }
}

const pipe = (val) => {
  const funList = []
  const get = function (obj, funName) {
    if (funName === "get") {
      return funList.reduce((acc, fn) => {
        return fn(acc)
      }, val)
    } else {
      funList.push(window[funName])
    }
    return proxy
  }
  const proxy = new Proxy({}, { get })
  return proxy
}

const quickSort = (arr, first, end) => {
  if (first > end) return
  const mid = arr[first] //
  let i = first
  let j = end
  while (first <= end) {
    while (arr[first] <= arr[mid] && first <= end) {
      first++
    }
    while (arr[end] >= arr[mid] && first <= end) {
      end++
    }
    ;[arr[first], arr[end]] = [arr[end], arr[first]]
  }
  ;[arr[i], arr[first]] = [arr[first], arr[i]]
  quickSort(arr, i, first - 1)
  quickSort(arr, first + 1, j)
}

function quickSort(arr, start, end) {
  var stack = [],
    left,
    right
  if (start < end) {
    stack.push(end)
    stack.push(start)
    while (stack.length != 0) {
      left = stack.pop()
      right = stack.pop()
      index = partition(arr, left, right)
      if (left < index - 1) {
        stack.push(index - 1)
        stack.push(left)
      }
      if (right > index + 1) {
        stack.push(right)
        stack.push(index + 1)
      }
    }
  }
}
