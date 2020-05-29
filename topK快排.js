/*
 * @Author: yusonghu
 * @Date: 2020-05-23 13:59:56
 * @LastEditTime: 2020-05-24 15:17:07
 * @LastEditors: yusonghu
 * @Description: tok问题
 * @FilePath: /blog/topK快排.js
 */

const getLeastNumbers = (arr, k) => {
  if (k <= 0) {
    return []
  }
  if (k >= arr.length) {
    return arr.slice()
  }

  partitionArray(arr, 0, arr.length - 1, k)

  // 数组的前 k 个数此时就是最小的 k 个数，将其存入结果
  return arr.slice(0, k + 1)
}

const partitionArray = (arr, left, right, k) => {
  let mid = partition(arr, left, right)
  // 排好数组左边mid位
  if (mid === k) {
    return
  } else if (mid < k) {
    partitionArray(arr, mid + 1, right, k)
  } else {
    partitionArray(arr, left, mid - 1, k)
  }
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
