// node节点递归版本
const queue = [document.querySelector('#root')]
const nodeList = []

function breadthFirstSearch(count = 0) {
  if (queue[count]) {
    nodeList.push(queue[count])
    if (queue[count].children) {
      queue.push(...queue[count].children)
    }
  }
  queue[++count] && breadthFirstSearch(count)
  return nodeList
}

// node节点非递归版本
function breadthFirstSearch(root) {
  const nodeList = []
  const queue = []
  if (root) {
    queue.push(root)
    while (queue.length !== 0) {
      const node = queue.shift()
      nodeList.push(node)
      node.children && node.children.forEach(item => queue.push(item))
    }
  }
  return nodeList
}


