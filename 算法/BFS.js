
const BFS = (root) => {
  if (!root) return [];
  const stack = [root];
  const BFSRes = [];
  while (stack.length > 0) {
    const node = stack.shift();
    node.children && stack.push(...node.children);
    BFSRes.push(node);
  }
  return BFSRes;
};
