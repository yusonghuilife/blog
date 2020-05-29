/*
 * @Author: yusonghu
 * @Date: 2020-04-03 20:51:50
 * @LastEditTime: 2020-05-24 15:29:46
 * @LastEditors: yusonghu
 * @Description:
 * @FilePath: /blog/quickSort.js
 */

/**
 * @description:
 * @param {type}
 * @return:
 */
const quickSort = (arr, first, end) => {
  if (first > end) return ''
  const pivot = arr[first] // 第一个作为排序基点
  let i = first
  let j = end
  while (i !== j) {
    // 如果左边比基准值小，右边比基准值大，就移动指针
    while (arr[j] >= pivot && i < j) {
      j--
    }
    while (arr[i] <= pivot && i < j) {
      i++
    }
    if (i < j) {
      ;[arr[i], arr[j]] = [arr[j], arr[i]] // 交换
    }
  }
  ;[arr[first], arr[i]] = [arr[i], arr[first]]
  quickSort(arr, first, i - 1)
  quickSort(arr, i + 1, end)
}

const quickSort = (arr, first, end) => {
  let i = first
  let j = end
  let privot = arr[i]
  while (i < j) {
    while (arr[i] <= privot && i < j) {
      i++
    }
    while (arr[j] >= privot && i < j) {
      j--
    }
    if (i < j) {
      ;[arr[i], arr[j]] = [arr[j], arr[i]]
    }
  }
  ;[arr[first], arr[i]] = [arr[i], arr[first]]
  quickSort(arr, first, i - 1)
  quickSort(arr, i + 1, end)
}

const quickSort = (arr, first, end) => {
  const stack = [i, j]
  while (stack.length !== 0) {
    let j = stack.pop()
    let i = stack.pop()
    while (i < j) {
      while (arr[i] <= privot && i < j) {
        i++
      }
      while (arr[j] >= privot && i < j) {
        j--
      }
      if (i < j) {
        ;[arr[i], arr[j]] = [arr[j], arr[i]]
      }
    }
    ;[arr[first], arr[i]] = [arr[i], arr[first]]
    stack.push(first)
    stack.push(i - 1)
    stack.push(i + 1)
    stack.push(end)
  }
}

const quickSort = (arr, first, end) => {
  if (left < right) {
    let mid = partition(arr, first, end)
    quickSort(arr, mid + 1, right)
    quickSort(arr, left, mid - 1)
  }
  return arr
}

const partition = (arr, left, right) => {
  let i = left
  let j = right + 1
  let privot = arr[left]
  while (i <= j) {
    while (arr[++i] <= privot) {
      if (i === j) break
    }
    while (arr[--j] >= privot) {
      if (i === j) break
    }
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }
  ;[arr[left], arr[i]] = [arr[i], arr[left]]
  return i
}
