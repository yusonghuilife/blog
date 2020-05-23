/*
 * @Author: yusonghu
 * @Date: 2020-05-23 18:16:25
 * @LastEditTime: 2020-05-23 21:15:53
 * @LastEditors: yusonghu
 * @Description: 二叉搜索树
 * @FilePath: /blog/二叉搜索树.js
 */

// 二叉排序树（二叉查找树），它或者是一颗空树，或者是具有以下性质的二叉树：
// 任意一个结点左子树上的所有结点值均小于该结点值
// 任意一个结点右子树上的所有结点值均大于该结点值

/**
 * @description: BinaryTree
 * @param {type}
 * @return: root
 */
function BinaryTree() {
  //节点类
  let Node = function (key) {
    this.key = key
    this.left = null
    this.right = null
  }

  // 根节点
  let root = null

  const insertNode = function (node, newNode) {
    if (node !== null) {
      if (newNode.key < node.key) {
        insertNode(node.left, newNode)
        if (node.left == null) {
          node.left = newNode
        }
      } else {
        insertNode(node.right, newNode)
        if (node.right == null) {
          node.right = newNode
        }
      }
    }

    return null
  }

  this.insert = function (key) {
    let newNode = new Node(key)
    if (root === null) {
      root = newNode
    } else {
      insertNode(root, newNode)
    }
  }

  this.getTreeRoot = function () {
    return root
  }
}

// 由于null的栈内，node为null
// 立即退出当前栈，返回至node的key为3的栈，发现左孩子为null，则将key为1的node变成key为3的node的左孩子
// 同时退出3的栈，返回至8的栈，8的栈左孩子不null
// 不做任何操作，知道当前方法执行完毕，跳出8的栈，返回至方法所在的执行环境的栈
// 节点插入完毕，再进行下一个节点的插入，操作则同上
