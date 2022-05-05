/**
给你一棵二叉树的根节点 root ，翻转这棵二叉树，并返回其根节点。
 */
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
 * @return {TreeNode}
 */
const invertTree = function (root) {
  if (!root) return null;
  const tmp = root.right;
  root.right = root.left;
  root.left = tmp;
  invertTree(root.left);
  invertTree(root.right);
  return root;
};
