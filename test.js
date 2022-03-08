/* eslint-disable no-unused-vars */
const ajax = (url, method = 'get', timeout, async, data) => {
  const xhr = new XMLHttpRequest()
  timeout && (xhr.timeout = timeout)
  return new Promise((resolve, reject) => {
    xhr.ontimeout = () => reject?.(new Error('timeout'))

    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        if (xhr.status >= 200 && (xhr.status < 300 || xhr.status === 304)) {
          resolve?.(xhr.responseText)
        } else {
          reject(new Error(`${xhr.status}error`))
        }
      }
    }

    xhr.onerror = err => reject(err)

    const paramArr = []
    if (data) {
      for (const key in data) {
        paramArr.push(`${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
      }
    }

    if (method === 'get') {
      const index = url.indexOf('?')
      if (index === -1) {
        url += '?'
      } else if (index !== url.length - 1) {
        url += '&'
      }
      url += paramArr.join('&')
    }

    xhr.open(method, url, async)

    if (method === 'get') {
      xhr.send(null)
    } else {
      xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
      xhr.send(paramArr.join('&'))
    }
  })
}

const BFS = (root) => {
  if (!root) return []
  const stack = [root]
  const BFSRes = []
  while (stack.length > 0) {
    const node = stack.shift()
    node.children && stack.push(...node.children)
    BFSRes.push(node)
  }
  return BFSRes
}

/**
 * arr sorted
 */
const binarySearch = (arr, value) => {
  let left = 0
  let right = arr.length - 1
  while (left <= right) {
    const mid = Math.floor((right + left) / 2)
    if (value < arr[mid]) {
      right = mid - 1
    } else if (value > arr[mid]) {
      left = mid + 1
    } else {
      return mid
    }
  }
  return -1
}

/**
 * fun.bind(obj)
 * return new function
 */
function bind (thisArgs, ...args) {
  const key = Symbol('unIterable')
  thisArgs[key] = this
  return function (...args1) {
    thisArgs[key](...args, ...args1)
  }
}

/**
 * fun.apply(obj, [])
 */
function apply (thisArgs, arr) {
  const key = Symbol('unIterable')
  thisArgs[key] = this
  const res = thisArgs[key](...arr)
  delete thisArgs[key]
  return res
}

/**
 * fun.call(obj, args)
 */
function call (thisArgs, ...args) {
  const key = Symbol('unIterable')
  thisArgs[key] = this
  const res = thisArgs[key](...args)
  delete thisArgs[key]
  return res
}

/**
 * curry
 * add(1, 2)(3)
 */
const add = (a, b) => a + b

function curry (func) {
  const allArgs = []
  return function inner (...args1) {
    allArgs.push(...args1)
    return allArgs.length === func.length ? func(allArgs) : inner
  }
}

/**
 * 节流
 * throttle 一段时间内执行一次
 */

const throttle = (func, time = 500) => {
  let canRun = true
  return (...args) => {
    // canRun = false;
    if (canRun) {
      canRun = false
      setTimeout(() => {
        func(...args)
        canRun = true
      }, time)
    }
  }
}

/**
 * 防抖
 * debounce
 * 在事件被触发n秒后再执行回调，如果在这n秒内又被触发，则重新计时
 */

const debounce = (func, time = 500) => {
  const debounceTimer = null
  return (...args) => {
    clearTimeout(debounceTimer)
    setTimeout(() => {
      func(...args)
    }, time)
  }
}

/**
 * clone
 */
const clone = () => {
}

/**
 * DFS
 */

const DFS = () => {

}
