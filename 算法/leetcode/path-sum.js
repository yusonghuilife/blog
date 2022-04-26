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
 * @param {number} targetSum
 * @return {boolean}
 */
const hasPathSum = function (root, targetSum) {
  if (root && !root.left && !root.right && root.val === targetSum) return true;
  const resLeft = root && root.left && hasPathSum(root.left, targetSum - root.val);
  const resRight = root && root.right && hasPathSum(root.right, targetSum - root.val);
  return !!(resLeft || resRight);
};
