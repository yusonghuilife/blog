// node节点递归版本
function deepFirstSearch (root, nodeList) {
  if (root) {
    nodeList.push(node);
    for (let i = 0; i < root.children.length; i++) {
      deepFirstSearch(root.children[i], nodeList);
    }
  }
  return nodeList;
}

// node节点非递归版本

function deepFirstSearch (root) {
  const res = [];
  if (root !== null) {
    const stack = [];
    stack.push(root);
    while (stack.length !== 0) {
      const node = stack.pop();
      res.push(node);
      for (let i = 0; i < node.children.length; i++) {
        stack.push(node.children[i]);
      }
    }
  }
  return res;
}

// 树递归版本
function deepFirstSearch (root, res) {
  if (!root) return res;
  deepFirstSearch(root.left, res);
  deepFirstSearch(root.right, res);
  return res;
}

// 树非递归版本

function deepFirstSearch (root) {
  const res = [];
  if (root !== null) {
    const stack = [];
    stack.push(root);
    while (stack.length) {
      const item = stack.pop();
      res.push(item);
      item.left && stack.push(item.left);
      item.right && stack.push(item.right);
    }
  }
  return res;
}
