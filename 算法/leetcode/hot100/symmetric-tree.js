/* eslint-disable no-mixed-operators */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const isSymmetric = function (root) {
  return isEqualSubTree(root, root);
};

function isEqualSubTree (leftNode, rightNode) {
  if (!leftNode && !rightNode) return true; // 先检查null null
  if (!leftNode || !rightNode) return false;
  return leftNode.val === rightNode.val && isEqualSubTree(leftNode.left, rightNode.right) && isEqualSubTree(leftNode.right, rightNode.left);
};
