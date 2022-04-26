// 先右后左
function preOrder (node) {
  if (!node) return;
  const stack = [node];
  while (stack.length !== 0) {
    const tmp = stack.pop();
    console.log(tmp); // 输出
    if (tmp.right) stack.push(tmp.right);
    if (tmp.left) stack.push(tmp.left);
  }
}

// 先把左边的，全部放进arr输出，再处理右边的
function inOrder (node) {
  const stack = [];
  while (true) {
    while (!node) {
      stack.push(node);
      node = node.left;
    }
    if (stack.length === 0) break;
    const tmp = stack.pop();
    console.log(tmp); // 打印
    node = tmp.right;
  }
}

// 简略版
// function posOrder(node) {
//   const stack = [node]
//   const res = []
//   while (stack.length !== 0) {
//     const tmp = stack.pop()
//     res.push(tmp)
//     if (tmp.left) stack.push(tmp.left)
//     if (tmp.right) stack.push(tmp.right)
//   }
//   return res.reverse().toString()
// }

function posOrder (node) {
  if (!node) return '';
  const stack = [node];
  while (stack.length !== 0) {
    const tmp = stack[stack.length - 1];
    if (tmp.left && node !== tmp.left && node !== tmp.right) {
      stack.push(tmp.left);
    } else if (tmp.right && node !== tmp.right) {
      stack.push(tmp.right);
    } else {
      console.log(stack.pop());
      node = tmp; // 防止回溯重复
    }
  }
}
