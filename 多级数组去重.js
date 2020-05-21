// [1,[2,3],[[4],[4,[4,5]]]].unique() -> [1,2,3,4,5]
const flatArr = (arr) => {
  return arr.reduce(
    (acc, cur) =>
      Array.isArray(cur) ? acc.concat(flatArr(cur)) : acc.concat(cur),
    []
  )
}

// 2[a3[bc]] ->abcbcbcabcbcbc
/*
 * [394] 字符串解码
 */
/**
 * @param {string} s
 * @return {string}
 */

var decodeString = function (s) {
  let stack = [] // 保存需要 repeat 的字符串
  let times = '' // 乘以的倍数

  for (let i = 0, len = s.length; i < len; i++) {
    let item = s[i]

    if (/[0-9]/.test(item)) {
      if (i === 0 || /[0-9]/.test(s[i - 1])) {
        times += item
      } else {
        times = item
      }
    } else if (item === '[') {
      times && stack.push(Number(times))
      times = ''
    } else if (item === ']') {
      var curr = stack.pop()
      var temp = ''
      while (typeof curr !== 'number') {
        temp = curr + temp
        curr = stack.pop()
      }
      temp = temp.repeat(curr)
      stack.push(temp)
    } else {
      stack.push(item)
    }
  }
  return stack.join('')
}

// [’NaN’,’NaN’,{a:1},’{a:1}’]

const isSame = (a, b) => {
  // +0 -0
  if (a === b) {
    return 1 / a === 1 / b
  } else {
    // NaN
    return a !== a && b !== b
  }
}

// Vuex   state、getter、action、module
// module A 中一个 action，想去修改 module B 中的 state；Vuex 提供了什么方式？

// 非递归快排

// sort排序内部如何排序的
// 数量小于10的数组使用 InsertionSort，比10大的数组则使用 QuickSort

// 一个二叉树的插入

// 找数组里总和大于等于目标值的连续数字合和

// 二叉树两个结点之间的距离
