/*
 * @Author: yusonghu
 * @Date: 2020-04-04 09:03:04
 * @LastEditTime: 2020-05-24 16:36:28
 * @LastEditors: yusonghu
 * @Description: FindPath
 * @FilePath: /blog/tagetSumInBinaryTree.js
 */

function FindPath(root, expectNumber) {
  const stack = []
  const result = []
  find(root, 0)
  return result

  function find(root, sum) {
    if (!root) {
      return
    }
    stack.push(root.value)
    sum += root.value
    if (!root.left && !root.right && sum === expectNumber) {
      result.push(stack.slice())
    }
    if (root.left) {
      find(root.left, sum)
    }
    if (root.right) {
      find(root.right, sum)
    }
    stack.pop() // 注意pop的时机，一个find对应一个pop，完美
    return
  }
}
