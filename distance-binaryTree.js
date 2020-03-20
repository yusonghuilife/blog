// 思路 找到公共父节点后 root->A + root->B - 2 root->公共父节点

// 首先找到树到某个节点距离
let distance = 0

function findNode(root, node) {
  if (root === null) return
  if (root === node) return 1
  distance++
  findNode(root.left, node)
  distance--
  findNode(root.right, node)
}

// 找到公共父节点
const lowestCommonAncestor = (root, left, right) => {
  if (root === null) return 0
  if (root === left || root === right) return 1
  let ltree = lowestCommonAncestor(root.left, left, right)
  let rtree = lowestCommonAncestor(root.right, left, right)
  if (!ltree) return rtree
  if (!rtree) return ltree
  if (ltree && rtree) return root
}
