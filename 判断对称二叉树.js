const isSymmetric = function (root) {
  if (root.left !== root.right) return false
  return util(root.left, root.right)
}

function util(nodeA, nodeB) {
  if (nodeA === nodeB || (nodeA === null && nodeB === null)) {
    return util(nodeA.left, nodeB.right) && util(nodeA.right, nodeB.left)
  } else {
    return false
  }
}
