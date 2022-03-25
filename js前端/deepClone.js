/* eslint-disable symbol-description */
/* eslint-disable prefer-regex-literals */
const symbolName = Symbol()
const obj = {
  objNumber: 1,
  number: 1,
  objString: 'ss',
  string: 'stirng',
  objRegexp: new RegExp('\\w'),
  regexp: /w+/g,
  date: new Date(),
  function: function () {
    console.log('cloned')
  },
  array: [{ a: 1 }, 2],
  [symbolName]: 111
}
obj.d = obj

// 该拷贝方法层数过多会出现递归爆栈
function clone (target, map = new WeakMap()) {
  if (target && typeof target === 'object') {
    const cloneTarget = Array.isArray(target) ? [] : {}

    if (map.get(target)) {
      return map.get(target)
    }
    map.set(target, cloneTarget) // [] , {} boolean为true

    for (const key in target) {
      if (target.hasOwnProperty(key)) {
        cloneTarget[key] = clone(target[key], map)
      }
    }
    return cloneTarget
  } else if (typeof target === 'function') {
    return target.toString()
  } else {
    return target
  }
}

// 使用循环避免递归深度

function cloneLoop (x) {
  // =============
  const uniqueList = [] // 用来去重
  // =============

  const root = {}

  // 循环数组
  const stack = [
    {
      parent: root,
      key: undefined,
      data: x
    }
  ]

  while (stack.length) {
    // 深度优先 层次遍历
    const { parent, key, data } = stack.shift()

    // 初始化赋值目标，key为undefined则拷贝到父元素，否则拷贝到子元素
    let res = parent
    if (typeof key !== 'undefined') {
      res = parent[key] = {}
    }

    // 数据已经存在
    const uniqueData = find(uniqueList, data)
    if (uniqueData) {
      parent[key] = uniqueData.target
      break // 中断本次循环
    }

    // 数据不存在
    // 保存源数据，在拷贝数据中对应的引用
    uniqueList.push({
      source: data,
      target: res
    })

    for (const k in data) {
      if (data.hasOwnProperty(k)) {
        if (isObject(data[k])) {
          // 下一次循环
          stack.push({
            parent: res,
            key: k,
            data: data[k]
          })
        } else {
          res[k] = data[k]
        }
      }
    }
  }

  return root
}

function find (arr, item) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].source === item) {
      return arr[i]
    }
  }

  return null
}

console.log(cloneLoop(obj))

// or
const isComplexDataType = obj => (typeof obj === 'object' || typeof obj === 'function') && (obj !== null)
const deepClone1 = function (obj, hash = new WeakMap()) {
  if (obj.constructor === Date) { return new Date(obj) } // 日期对象直接返回一个新的日期对象
  if (obj.constructor === RegExp) { return new RegExp(obj) } // 正则对象直接返回一个新的正则对象
  // 如果循环引用了就用 weakMap 来解决
  if (hash.has(obj)) return hash.get(obj)
  const allDesc = Object.getOwnPropertyDescriptors(obj)
  // 遍历传入参数所有键的特性
  const cloneObj = Object.create(Object.getPrototypeOf(obj), allDesc)
  // 继承原型链
  hash.set(obj, cloneObj)
  for (const key of Reflect.ownKeys(obj)) {
    cloneObj[key] = (isComplexDataType(obj[key]) && typeof obj[key] !== 'function') ? deepClone1(obj[key], hash) : obj[key]
  }
  return cloneObj
}
