/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
const lowestCommonAncestor = function (root, p, q) {
  if (!root || root === p || root === q) return root; // 只要当前根节点是p和q中的任意一个，就返回（因为不能比这个更深了，再深p和q中的一个就没了）
  // 根节点不是p和q中的任意一个，那么就继续分别往左子树和右子树找p和q
  const left = lowestCommonAncestor(root.left, p, q);
  const right = lowestCommonAncestor(root.right, p, q);
  if (!left && !right) {
    return null;
  }
  if (left && !right) {
    return left;
  }
  if (!left && right) {
    return right;
  }
  return root; // root === p && root === q 说明找到父节点
};
