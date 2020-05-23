/*
 * @Author: yusonghu
 * @Date: 2020-05-23 21:03:06
 * @LastEditTime: 2020-05-23 21:14:48
 * @LastEditors: yusonghu
 * @Description:
 * @FilePath: /blog/moveZero.js
 */

// 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。

/**
 * @description: 不为0时全部排在前面，后面自然全部为0
 * @param {type} Array
 * @return: none
 */
const moveZeroes = (arr) => {
  let index = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      arr[index++] = arr[i]
    }
  }
  while (index < arr.length) {
    arr[index++] = 0
  }
}
